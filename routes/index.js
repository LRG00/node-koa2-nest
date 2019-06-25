const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.redirect('http://149.28.161.252:10000')
})

module.exports = router
