
import Koa from 'koa'
import { resolve, join } from 'path'
import R from 'ramda'
const app = new Koa()
// const koaBody = require('koa-body');
// const index = require('./routes/index')
// const users = require('./routes/users')
// const login = require('./routes/login')
// const articles = require('./routes/articles')
// const tag = require('./routes/tag')
// const cate = require('./routes/cate')
// const uploadRoutes = require('./routes/upload')
const upload = require('./utils/upload')

const r = path => resolve(__dirname, path)
const MIDDLEWARE = ['database', 'general', 'router', 'logger', 'cors']
const useMiddleware = (app) => {
  // 中间件的个数不定，通过 Ramda 的特性，从右往左进行函数组合，右侧函数的返回结果总是左侧函数的输入参数
  // R.map(console.log)([1, 2, 3])
  // MIDDLEWARE 数组交给了 R.map
  // 分别拿到的单个数组中的值，我们可以通过 R.compose 再次进行组合。
  return R.map(R.compose(
    R.map(i => i(app)),
    require,
    i => `${r('./middleware')}/${i}`)
  )
}
useMiddleware(app)(MIDDLEWARE)

// app.use(koaBody({
//   multipart: true,
//   // 不注释的话会报 415 Unsupported Media Type
//   // encoding: 'gzip',
//   formidable: {
//     uploadDir: join(__dirname, 'public/upload'),
//     keepExtensions: true,
//     maxFieldsSize: 2 * 1024 * 1024 * 1024,
//     onFileBegin: (name, file) => {
//       // console.log(file);
//       // 获取文件后缀
//       const ext = upload.getUploadFileExt(file.name);
//       // 最终要保存到的文件夹目录
//       const dirName = upload.getUploadDirName();
//       const dir = join(__dirname, `public/upload/${dirName}`);
//       // 检查文件夹是否存在如果不存在则新建文件夹
//       upload.checkDirExist(dir);
//       // 获取文件名称
//       const fileName = upload.getUploadFileName(ext);
//       // 重新覆盖 file.path 属性
//       file.path = `${dir}/${fileName}`;
//       app.context.uploadpath = app.context.uploadpath ? app.context.uploadpath : {};
//       app.context.uploadpath[name] = `${dirName}/${fileName}`;
//     },
//   }
// }));




// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
// app.use(login.routes(), login.allowedMethods())
// app.use(articles.routes(), articles.allowedMethods())
// app.use(tag.routes(), tag.allowedMethods())
// app.use(uploadRoutes.routes(), uploadRoutes.allowedMethods())
// app.use(cate.routes(), cate.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
