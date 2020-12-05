import { ApiProperty } from '@nestjs/swagger'

export class SearchByIdResponseDto {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  municipality: string

  @ApiProperty()
  sector: string
}
