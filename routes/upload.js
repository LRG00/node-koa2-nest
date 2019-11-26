// const router = require('koa-router')();
// router.prefix('/upload')
// router.post('/', async (ctx) => {
//             // console.log(ctx.uploadpath);
//             ctx.body = JSON.stringify(ctx.request.files);
           
//            });

// module.exports = router;

import { controller, get, post, put, log, convert, required } from '../decorator/router'
const { uploadFile } = require('../utils/upload1')
import { resolve, join } from 'path'
@controller('/upload')
export class indexController {
  @post('file')
  async upload (ctx, next) {
    let result = { success: false }
    let serverFilePath = join( __dirname, '../upload-files' )

    // 上传文件事件
    result = await uploadFile( ctx, {
      fileType: 'album',
      path: serverFilePath
    })

    ctx.body = result
  }
}

