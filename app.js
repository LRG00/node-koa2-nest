const Koa = require('koa')
const path=require('path')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koajwt = require('koa-jwt');
require('./utils/db-util')
const staticCache = require('koa-static-cache')

const index = require('./routes/index')
const users = require('./routes/users')
const login = require('./routes/login')
const articles = require('./routes/articles')
const tag = require('./routes/tag')
const cate = require('./routes/cate')

// error handler
onerror(app)



// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
// 错误处理
app.use((ctx, next) => {
  return next().catch((err) => {
    console.log(err, 'pppppppppppp')
      if(err.status === 401){
          ctx.status = 401;
        ctx.body = 'Protected resource, use Authorization header to get access\n';
      }else{
          throw err;
      }
  })
})

app.use(koajwt({
secret: 'my_token'
}).unless({
path: [/login/, '/']
}))
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(login.routes(), login.allowedMethods())
app.use(articles.routes(), articles.allowedMethods())
app.use(tag.routes(), tag.allowedMethods())
app.use(cate.routes(), cate.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
