import { Get, Controller, Body, Post } from "@nestjs/common";
import axios from "axios";
import crypto from "crypto-js";

function encryptSha1 (data) {
  return crypto.createHash('sha1').update(data, 'utf8').digest('hex')
};

@Controller("wxapp")
export class wxappController {
  @Post("login")
  async getSessionKey(@Body() { appid, appSecret, code }) {
    console.log(appid, appSecret, code, 'iiiiiiiiii')
    const data = await axios
      .get("https://api.weixin.qq.com/sns/jscode2session", {
        params: {
          appid: appid,
          secret: appSecret,
          js_code: code,
          grant_type: "authorization_code"
        }
      })
      .then(response => {
        let data = response.data;
        if (!data.openid || !data.session_key || data.errcode) {
          return {
            result: -2,
            errmsg: data.errmsg || "返回数据字段不完整"
          };
        } else {
          // data.session_key = encryptSha1(data.session_key);
          return data;
        }
      });
    return data;
  }
}
