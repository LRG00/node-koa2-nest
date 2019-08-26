const router = require('koa-router')();
const jwt = require('jsonwebtoken');
const tagController = require('./../controllers/tagController')
router.prefix('/tag')
router.get('/list', tagController.list)
      .post('/add', tagController.add);

module.exports = router;