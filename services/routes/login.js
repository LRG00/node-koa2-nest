const router = require('koa-router')();
const jwt = require('jsonwebtoken');
const userInfoController = require('./../controllers/userLoginController')
// router.prefix('/api')
router.post('/login', userInfoController.signIn);

module.exports = router;