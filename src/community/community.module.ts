import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../system/user/user.module';
import { CommunityService } from './community.service';
import { CommunityEntity } from './community.entity';
import { CommunityController } from './community.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityEntity]), UserModule],
  providers: [CommunityService],
  controllers: [
    CommunityController
  ],
  exports: []
})
export class CommunityModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
