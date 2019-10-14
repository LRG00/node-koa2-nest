import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const appOptions = {cors: true};
  // const app = await NestFactory.create(ApplicationModule, appOptions);
  const app = await NestFactory.create<NestExpressApplication>(
    ApplicationModule, appOptions
  );
  app.setGlobalPrefix('api');
  app.useLogger(app.get('NestWinston'));
  const options = new DocumentBuilder()
    .setTitle('NestJS Realworld Example App')
    .setDescription('The Realworld API description')
    .setVersion('1.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
  // 静态资源设置
  app.useStaticAssets(join(__dirname, '..', 'public/uploads/'));
  await app.listen(3000);
}
bootstrap();