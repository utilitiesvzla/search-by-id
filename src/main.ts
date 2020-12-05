import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('Search by id')
    .setVersion(process.env.npm_package_version)
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
void bootstrap()
