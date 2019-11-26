import koaBody from 'koa-body'
import upload from '../utils/upload'
import { join } from 'path'

export const uploadMin = app => {
  console.log('xxx',upload.getUploadDirName())
  app.use(koaBody({
    multipart: true,
    // 不注释的话会报 415 Unsupported Media Type
    // encoding: 'gzip',
    formidable: {
      uploadDir: join(__dirname, 'public/upload'),
      keepExtensions: true,
      maxFieldsSize: 2 * 1024 * 1024 * 1024,
      onFileBegin: (name, file) => {
        console.log(file);
        // 获取文件后缀
        const ext = upload.getUploadFileExt(file.name);
        // 最终要保存到的文件夹目录
        const dirName = upload.getUploadDirName();
        const dir = join(__dirname, `public/upload/${dirName}`);
        // 检查文件夹是否存在如果不存在则新建文件夹
        upload.checkDirExist(dir);
        // 获取文件名称
        const fileName = upload.getUploadFileName(ext);
        // 重新覆盖 file.path 属性
        file.path = `${dir}/${fileName}`;
        app.context.uploadpath = app.context.uploadpath ? app.context.uploadpath : {};
        app.context.uploadpath[name] = `${dirName}/${fileName}`;
      },
    }
  }));
}