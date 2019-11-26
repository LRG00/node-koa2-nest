const router = require('koa-router')()
const articleModel = require('../models/articleModel')

router.get('/', async (ctx, next) => {
  ctx.body = {
    xx: 'hello world'
  }
})


module.exports = router
