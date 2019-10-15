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
import { uploadfileModule } from './uploadfile/uploadfile.module';
import { musicModule } from './mymusic/music.module';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    WinstonModule.forRoot({}),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule,
    RoleModule,
    SysUserModule,
    menuModule,
    uploadfileModule,
    musicModule
  ],
  controllers: [
    AppController
  ],
  providers: []
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
