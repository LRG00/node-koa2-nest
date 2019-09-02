const userInfoService = require("./../services/userLoginService");
const jwt = require("jsonwebtoken");
module.exports = {
  async signIn(ctx) {
    const formData = ctx.request.body;
    let result = await userInfoService.signIn(formData);
    // return ctx.body = data
    if (!formData.user_password || !formData.user_name) {
      return (ctx.body = {
        code: "000002",
        data: null,
        msg: "参数不合法"
      });
    }
    if (result !== null) {
      const token = jwt.sign(
        {
          name: result.name,
          id: result.id
        },
        "my_token",
        { expiresIn: "1h" }
      );
      return (ctx.body = {
        code: "000001",
        data: token,
        msg: "登录成功"
      });
    } else {
      return (ctx.body = {
        code: "000002",
        data: null,
        msg: "用户名或密码错误"
      });
    }
  },
};
