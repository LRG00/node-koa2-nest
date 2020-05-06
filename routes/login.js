import { controller, get, post, put, log, convert, required } from '../decorator/router'
const userLoginController = require('./../controllers/userLoginController')
@controller('/login')
export class indexController {
  @post('/')
  async signIn(ctx) {
    const formData = ctx.request.body;
    let result = await userLoginController.signIn(ctx);
    return result
  }
}
