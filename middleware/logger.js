import logger from 'koa-logger'
export const loggerMiddleware = app => {
  app.use(logger())
  // logger
  app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} ----------- ${ms}ms`)
  })
}