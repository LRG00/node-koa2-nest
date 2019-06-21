const userInfoService = require("./../services/userLoginService");
const userCode = require("./../codes/user");
const jwt = require("jsonwebtoken");
module.exports = {
  /**
   * 登录操作
   * @param  {obejct} ctx 上下文对象
   */
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
    // const result = await userModel.findOne({
    //   name: data.name,
    //   password: data.password
    // })
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

  /**
   * 注册操作
   * @param   {obejct} ctx 上下文对象
   */
  async signUp(ctx) {
    const formData = ctx.request.body;
    let result = await userInfoService.signIn(formData);
    console.log("eeeeeeeeeeeeeeeeeeeeeee", result);
    // return ctx.body = data
    if (!formData.name || !formData.gender) {
      return (ctx.body = {
        code: "000002",
        data: null,
        msg: "参数不合法"
      });
    }
    // const result = await userModel.findOne({
    //   name: data.name,
    //   password: data.password
    // })
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

  /**
   * 获取用户信息
   * @param    {obejct} ctx 上下文对象
   */
  async getLoginUserInfo(ctx) {
    let session = ctx.session;
    let isLogin = session.isLogin;
    let userName = session.userName;

    console.log("session=", session);

    let result = {
      success: false,
      message: "",
      data: null
    };
    if (isLogin === true && userName) {
      let userInfo = await userInfoService.getUserInfoByUserName(userName);
      if (userInfo) {
        result.data = userInfo;
        result.success = true;
      } else {
        result.message = userCode.FAIL_USER_NO_LOGIN;
      }
    } else {
      // TODO
    }

    ctx.body = result;
  },

  /**
   * 校验用户是否登录
   * @param  {obejct} ctx 上下文对象
   */
  validateLogin(ctx) {
    let result = {
      success: false,
      message: userCode.FAIL_USER_NO_LOGIN,
      data: null,
      code: "FAIL_USER_NO_LOGIN"
    };
    let session = ctx.session;
    if (session && session.isLogin === true) {
      result.success = true;
      result.message = "";
      result.code = "";
    }
    return result;
  }
};
