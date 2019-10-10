import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { RoleModule } from './role/role.module';
import { SysUserModule } from './sysUser/sysUser.module';
import { menuModule } from './menu/menu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule,
    RoleModule,
    SysUserModule,
    menuModule
  ],
  controllers: [
    AppController
  ],
  providers: []
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}