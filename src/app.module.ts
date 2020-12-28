import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';
import { CustomerModule } from './customer/customer.module';
import { CommunityModule } from './community/community.module';
import { TrackModule } from './track/track.module';
import { UserModule } from './system/user/user.module';
import { AuthModule } from './system/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './profile/profile.module';
import { PermModule } from './system/perm/perm.module';
import { TagModule } from './tag/tag.module';
import { ConfigModule, ConfigService } from '@nestjs/config' // 获取环境变量
import appConfig from './config/index'
@Module({
  imports: [
    ConfigModule.forRoot({
      load: appConfig,
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService): Promise<any> => ({
        type: config.get('database.type'),
        host: config.get('database.host'),
        port: config.get('database.port'),
        username: config.get('database.username'),
        password: config.get('database.password'),
        database: config.get('database.database'),
        charset: config.get('database.charset'),
        multipleStatements: config.get('datebase.multipleStatements'),
        // dateStrings: config.get('database.dateStrings'),
        entities: ['src/**/*.entity{.ts,.js}'],
        synchronize: config.get('database.synchronize'),
        logging: config.get('database.logging'),
        logger: config.get('database.logger')
      }),
      inject: [ConfigService]
    }),
    ArticleModule,
    CustomerModule,
    CommunityModule,
    TrackModule,
    UserModule,
    AuthModule,
    ProfileModule,
    PermModule,
    TagModule
  ],
  controllers: [
    AppController
  ],
  providers: []
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
