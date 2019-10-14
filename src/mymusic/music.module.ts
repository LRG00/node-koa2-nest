import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { musicService } from './music.service';
import { ExampleService } from '../MailerService';
import { musicEntity } from './music.entity';
import { musicController } from './music.controller';

@Module({
  imports: [TypeOrmModule.forFeature([musicEntity]), UserModule],
  providers: [musicService, ExampleService],
  controllers: [
    musicController
  ],
  exports: []
})
export class musicModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
