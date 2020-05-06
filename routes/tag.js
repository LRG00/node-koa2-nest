import { controller, get, post, put, log, convert, required } from '../decorator/router'
const tagController = require('./../controllers/tagController')
@controller('/tag')
export class indexController {
  @get('/list')
  async list(ctx) {
    let result = await tagController.list(ctx);
    return result
  }
  @post('/add')
  async add(ctx) {
    let result = await tagController.add(ctx);
    return result
  }
}
