import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { menuService } from './menu.service';
import { ExampleService } from '../MailerService';
import { menuEntity } from './menu.entity';
import { menuController } from './menu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([menuEntity]), UserModule],
  providers: [menuService, ExampleService],
  controllers: [
    menuController
  ],
  exports: []
})
export class menuModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
