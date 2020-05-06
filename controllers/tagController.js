const tagService = require("./../services/tagService.js");
module.exports = {
  // 获取列表
  async list(ctx) {
    const formData = ctx.request.query;
    console.log(formData, 'xxxxxxxxxxxxxxxxxxx')
    let result = await tagService.getList(formData);
    ctx.body = {
      code: "200",
      data: result,
      msg: "操作成功"
    };
  },
  // add 文章
  async add(ctx) {
    const formData = ctx.request.body;
    let result = await tagService.add(formData);
    ctx.body = {
      code: "200",
      data: result,
      msg: "操作成功"
    };
  }
};
