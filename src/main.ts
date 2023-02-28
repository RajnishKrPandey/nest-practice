/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('The Description of the API')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/',app, document);

  await app.listen(3000);
}
bootstrap();
