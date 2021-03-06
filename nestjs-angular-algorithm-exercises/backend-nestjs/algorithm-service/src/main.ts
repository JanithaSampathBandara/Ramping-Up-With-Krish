import { NestFactory } from '@nestjs/core';
import { nextTick } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const options = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  }

  app.enableCors(options);

  await app.listen(3000);
}
bootstrap();
