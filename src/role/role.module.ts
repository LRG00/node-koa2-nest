import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';
import { RoleController } from './role.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity]), UserModule],
  providers: [RoleService],
  controllers: [
    RoleController
  ],
  exports: []
})
export class RoleModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
