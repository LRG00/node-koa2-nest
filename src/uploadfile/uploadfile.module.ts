import {Module, NestModule} from '@nestjs/common';
import { uploadfileController } from './uploadfile.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [
    uploadfileController
  ],
  exports: []
})
export class uploadfileModule {}
