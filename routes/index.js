const router = require('koa-router')()
const articleModel = require('../models/articleModel')

router.get('/', async (ctx, next) => {
  let articleList = await articleModel.getArticleList({ pageSize: 10, page: 1 })
  await ctx.render('index', {
    articleList
  })
})


module.exports = router
