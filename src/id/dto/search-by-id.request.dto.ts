import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator'
import { SearchByIdDocumentType } from './search-by-id.type.dto'

export class SearchByIdRequestDto {
  @IsEnum(SearchByIdDocumentType)
  @IsNotEmpty()
  @ApiProperty({
    enum: SearchByIdDocumentType
  })
  documentType: SearchByIdDocumentType

  @IsNumber()
  @IsNotEmpty()
  @Transform(val => +val)
  @ApiProperty()
  documentNumber: number
}
