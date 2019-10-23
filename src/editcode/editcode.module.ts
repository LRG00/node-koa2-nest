import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { editcodeService } from './editcode.service';
import { editcodeEntity } from './editcode.entity';
import { editcodeController } from './editcode.controller';

@Module({
  imports: [TypeOrmModule.forFeature([editcodeEntity]), UserModule],
  providers: [editcodeService],
  controllers: [
    editcodeController
  ],
  exports: []
})
export class editcodeModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
