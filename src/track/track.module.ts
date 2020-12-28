import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../system/user/user.module';
import { TrackService } from './track.service';
import { TrackEntity } from './track.entity';
import { TrackController } from './track.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TrackEntity]), UserModule],
  providers: [TrackService],
  controllers: [
    TrackController
  ],
  exports: []
})
export class TrackModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
