const router = require('koa-router')();
const jwt = require('jsonwebtoken');
const articleController = require('./../controllers/articleController')
router.prefix('/post')
router.get('/list', articleController.list)
      .post('/add', articleController.add);

module.exports = router;