import { HttpModule, Module } from '@nestjs/common'
import { IdController } from './controller/id.controller'
import { IdService } from './service/id.service'

@Module({
  controllers: [
    IdController
  ],
  imports: [
    HttpModule
  ],
  providers: [
    IdService
  ]
})
export class IdModule {}
