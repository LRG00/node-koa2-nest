import { NestFactory } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit'
import { ApplicationModule } from './app.module';
import * as helmet from 'helmet'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { logger } from './shared/middleware/logger.middleware'
import { Logger, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const appOptions = {cors: true};
  const app = await NestFactory.create(ApplicationModule, appOptions);
  app.setGlobalPrefix('api');
  // DocumentBuilder是一个辅助类，有助于结构的基本文件SwaggerModule。它包含几种方法，可用于设置诸如标题，描述，版本等属性。
  const options = new DocumentBuilder()
    .setTitle('NestJS Realworld Example App')
    .setDescription('The Realworld API description')
    .setVersion('1.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
  // 设置角色验证器
  // 访问频率限制
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15分钟
      max: 1000 // 限制15分钟内最多只能访问1000次
    }),
  )

  // web 漏洞, 
  app.use(helmet(), logger)
  await app.listen(3000);
  Logger.log(`http://localhost:${3000}`, '服务启动成功')
}
bootstrap();