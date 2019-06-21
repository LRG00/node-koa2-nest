const router = require('koa-router')();
const jwt = require('jsonwebtoken');
const userInfoController = require('./../controllers/user-info')
router.prefix('/api')
router.post('/login', userInfoController.signUp);

module.exports = router;