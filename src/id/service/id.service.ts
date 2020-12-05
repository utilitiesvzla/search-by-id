import { HttpService, Injectable, NotFoundException } from '@nestjs/common'
import { SearchByIdRequestDto } from '../dto/search-by-id.request.dto'
import { SearchByIdResponseDto } from '../dto/search-by-id.response.dto'

@Injectable()
export class IdService {
  constructor (
    private readonly http: HttpService
  ) {}

  private getValues (html: string): SearchByIdResponseDto {
    return {
      id: /Cédula:\<\/font\>\<\/b>\<\/td>\n(.*)<td align="left"\>(.*)<\/td>/gm.exec(html)[2],
      name: /Nombre:\<\/font\>\<\/b>\<\/td>\n(.*)<td align="left"\>\<b\>(.*)\<\/b><\/td>/gm.exec(html)[2],
      municipality: /Municipio:(.*)\n(.*)<td align="left"\>(.*)<\/td>/gm.exec(html)[3],
      sector: /Parroquia:\<\/font\>\<\/b>\<\/td>\n(.*)<td align="left"\>(.*)<\/td>/gm.exec(html)[2]
    }
  }

  async get (params: SearchByIdRequestDto): Promise<SearchByIdResponseDto> {
    const { data } = await this.http.get(
      'http://www.cne.gob.ve/web/registro_electoral/ce.php',
      {
        params: {
          nacionalidad: params.documentType,
          cedula: params.documentNumber
        }
      }
    ).toPromise()
    try {
      return this.getValues(data)
    } catch (e) {
      throw new NotFoundException(`Person with id ${params.documentType}-${params.documentNumber} does not exists`)
    }
  }
}
