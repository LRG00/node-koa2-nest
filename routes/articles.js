const router = require('koa-router')();
const articleController = require('./../controllers/articleController')
const fs = require('fs');
router.prefix('/post')
router.get('/list', articleController.list)
      .post('/add', articleController.add)
      .post('/update', articleController.update)
      .post('/upload', async (ctx) => {
            ctx.body = JSON.stringify(ctx.request.files);
           
           });

module.exports = router;