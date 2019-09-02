const router = require('koa-router')();
const userInfoController = require('./../controllers/userLoginController')
router.post('/login', userInfoController.signIn);

module.exports = router;