import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // we need to enable cors
  app.enableCors();
  await app.listen(3200);
}
bootstrap();