import { controller, get, post, put, log, convert, required } from '../decorator/router'
const cateController = require('./../controllers/cateController')
@controller('/cate')
export class indexController {
  @get('/list')
  async list(ctx) {
    let result = await cateController.list(ctx);
    return result
  }
  @post('/add')
  async add(ctx) {
    let result = await cateController.add(ctx);
    return result
  }
}
