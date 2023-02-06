import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const corsOptions = {
    origin: true,
    credentials: true,
    exposedHeaders: ['X-Total-Count'],
    allowedHeaders: ['X-Total-Count'],
  };

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(corsOptions);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
