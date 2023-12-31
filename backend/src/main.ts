import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // we need to enable cors
  app.enableCors();
  await app.listen(process.env.PORT || 3200);
}
bootstrap();
