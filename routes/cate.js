const router = require('koa-router')();
const cateController = require('./../controllers/cateController')
router.prefix('/cate')
router.get('/list', cateController.list)
      .post('/add', cateController.add);

module.exports = router;