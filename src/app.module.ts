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
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    WinstonModule.forRoot({}),
    MailerModule.forRoot({
      transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      defaults: {
        from:'"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
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
