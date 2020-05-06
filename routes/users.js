import { controller, get, post, put, log, convert, required } from '../decorator/router'
const userController = require('./../controllers/userController')
@controller('/user')
export class indexController {
  @get('/list')
  async list(ctx) {
    let result = await userController.list(ctx);
    return result
  }
  @post('/add')
  async add(ctx) {
    let result = await userController.add(ctx);
    return result
  }
}
