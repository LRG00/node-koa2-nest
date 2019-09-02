const cateService = require("./../services/cateService.js");
module.exports = {
  // 获取列表
  async list(ctx) {
    const formData = ctx.request.body;
    let result = await cateService.getList(formData);
    ctx.body = {
      code: "200",
      data: result,
      msg: "操作成功"
    };
  },
  // add 文章
  async add(ctx) {
    const formData = ctx.request.body;
    let result = await cateService.add(formData);
    ctx.body = {
      code: "200",
      data: result,
      msg: "操作成功"
    };
  }
};
