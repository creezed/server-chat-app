import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { PORT } = process.env;
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  try {
    await app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
