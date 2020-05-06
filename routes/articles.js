import { controller, get, post, put, log, convert, required } from '../decorator/router'
const articleController = require('./../controllers/articleController')
@controller('/post')
export class indexController {
  @get('/list')
  async list(ctx) {
    let result = await articleController.list(ctx);
    return result
  }
  @post('/add')
  async add(ctx) {
    let result = await articleController.add(ctx);
    return result
  }
  @post('/update')
  async update(ctx) {
    let result = await articleController.update(ctx);
    return result
  }
}
