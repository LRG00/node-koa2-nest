import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { SysUserService } from './sysUser.service';
import { SysUserEntity } from './sysUser.entity';
import { RoleController } from './sysUser.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SysUserEntity]), UserModule],
  providers: [SysUserService],
  controllers: [
    RoleController
  ],
  exports: []
})
export class SysUserModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
