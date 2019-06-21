const articleService = require("./../services/articleService.js");
module.exports = {
  // 获取列表
  async list(ctx) {
    const formData = ctx.request.body;
    let result = await articleService.getList(formData);
    ctx.body = {
      code: "200",
      data: result,
      msg: "操作成功"
    };
  }
};
