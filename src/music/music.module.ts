import {Module, NestModule} from '@nestjs/common';
import { musicController } from './music.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [
    musicController
  ],
  exports: []
})
export class musicModule {}
