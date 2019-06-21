/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
router.prefix('/api')
const routers = router
  .get('/user/getUserInfo.json', function (ctx, next) {
    ctx.body = 'this is a users response!'
  })
  // .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)
 
  
module.exports = routers
