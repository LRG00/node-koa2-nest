import { join, resolve } from 'path'
import koaBody from 'koa-bodyparser'
import json from 'koa-json'
import views from 'koa-views'
import koaStatic from 'koa-static'
import onerror from 'koa-onerror'
import koajwt from 'koa-jwt'
import staticCache from 'koa-static-cache'
import ErrorRoutesCatch from './ErrorRoutesCatch'

const r = path => resolve(__dirname, path)

export const koaBodyMin = app => {
  app.use(koaBody({
    enableTypes:['json', 'form', 'text']
  }))
}
export const jsonMin = app => {
  app.use(json())
}
// view 模板引擎
export const viewsMin = app => {
  app.use(views(r('../views'), {
    extension: 'ejs'
  }))
}
// 静态资源
export const staticMin = app => {
  app.use(koaStatic(r('../public')))
}
// 错误处理
export const errorMin = app => {
  app.use(ErrorRoutesCatch())
}
// 错误终端提示信息
export const debugErrorMin = app => {
  onerror(app)
}
// 添加鉴权的接口
// export const koajwtrMin = app => {
//   app.use(koajwt({
//     secret: 'my_token'
//     }).unless({
//       // 添加不需要鉴权的接口
//     path: [/login/, /post/, /upload/, "/", "/index.html",'/bg.jpg']
//     }))
// }
// 静态资源缓存
export const staticCacheMin = app => {
  // 缓存
  app.use(staticCache(join(r('../public')), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
  }))
  app.use(staticCache(join(r('../images')), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
  }))
}

