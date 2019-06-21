const Koa = require('koa')
const path=require('path')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const pv = require('./middleware//middleware')
const m1 = require('./middleware//m1')
const m2 = require('./middleware//m2')
const m3 = require('./middleware//m3')
const mongoose = require('mongoose')
const mysql = require('mysql')
const staticCache = require('koa-static-cache')
// const session = require('koa-session-minimal');
// const MysqlStore = require('koa-mysql-session');
const dbConfig = require('./config.js')
const Redis = require('koa-redis')

const index = require('./routes/index')
const users = require('./routes/users')
const api = require('./routes/api')

// error handler
onerror(app)

// redis
app.keys=['keys','keyskeys']
// app.use(session({
//   key:'mt', // key值
//   prefix:'mtpr', //前缀
//   store:new Redis()
// }))

// mongoose
// mongoose.connect(dbConfig.dbs)
// mongoose.connection.on('connected', () => console.log('已启动mongo'))


// session存储配置
// const sessionMysqlConfig= {
//   user: dbConfig.database.user,
//   password: dbConfig.database.password,
//   database: dbConfig.database.database,
//   host: dbConfig.database.host,
// }
const connection = mysql.createConnection({
  host     : '149.28.161.52',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : 'as123456789',   // 数据库密码
  database : 'test'  // 选中数据库
})
// 执行sql脚本对数据库进行读写 
connection.query('SELECT * FROM students',  (error, results, fields) => {
  console.log('111',results )
  if (error) throw error

});

// 配置session中间件
// app.use(session({
//   key: 'USER_SID',
//   store: new MysqlStore(sessionMysqlConfig)
// }))

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
app.use(pv())
app.use(m1())
app.use(m2())
app.use(m3())
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
app.use(api.routes(), api.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
