const router = require('koa-router')()
const articleModel = require('../models/articleModel')

router.get('/', async (ctx, next) => {
  let articleList = await articleModel.getArticleList({limit: 10, pageNo: 1})
  await ctx.render('index', {
    articleList
  })
})


module.exports = router
