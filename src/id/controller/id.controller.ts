import { Controller, Get, Query } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { SearchByIdRequestDto } from '../dto/search-by-id.request.dto'
import { SearchByIdResponseDto } from '../dto/search-by-id.response.dto'
import { IdService } from '../service/id.service'

@ApiTags('Search')
@Controller('search')
export class IdController {
  constructor (
    private readonly service: IdService
  ) {}

  @Get('id')
  @ApiOkResponse({
    type: SearchByIdResponseDto
  })
  getById (
    @Query() params: SearchByIdRequestDto
  ) {
    return this.service.get(params)
  }
}
