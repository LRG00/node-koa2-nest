const router = require('koa-router')();
const jwt = require('jsonwebtoken');
const userController = require('./../controllers/userController')
router.prefix('/user')
router.get('/list', userController.list)
      .post('/add', userController.add);

module.exports = router;