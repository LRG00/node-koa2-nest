const router = require('koa-router')();
router.prefix('/upload')
router.post('/', async (ctx) => {
            // console.log(ctx.uploadpath);
            ctx.body = JSON.stringify(ctx.request.files);
           
           });

module.exports = router;
