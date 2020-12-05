import { Module } from '@nestjs/common'
import { IdModule } from './id/id.module'

@Module({
  imports: [
    IdModule
  ]
})
export class AppModule {}
