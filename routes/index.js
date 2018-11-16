const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.cookies.set('ccc', Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string' // 页面返回字符串
})

router.get('/json', async (ctx, next) => {
  const a = await new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(new Date().getTime(), 'aaa')
      resolve('aa') // 返回的值
    }, 1000)
  })
  const c = await 123
  const b = await new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(new Date().getTime(), 'bbb')
      resolve('bb') // 返回的值
    }, 1000)
  })
  ctx.body = {
    cookie: ctx.cookies.get('ccc'),
    title: 'koa2 json',
    a,
    b,
    c  // 页面返回json对象
  }
})

module.exports = router
