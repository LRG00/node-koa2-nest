import { Post, UseInterceptors, UploadedFile, Controller } from '@nestjs/common';
import { diskStorage } from 'multer'
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';

@Controller('upload')
export class uploadfileController {
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './public/uploads'
      , filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${path.extname(file.originalname)}`)
      }
    })
  }))
  async uploadFile(@UploadedFile() file) {
    return file
  }
}