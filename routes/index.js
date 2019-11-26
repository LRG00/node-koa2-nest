import { controller, get, post, put, log, convert, required } from '../decorator/router'

@controller('/api')
export class indexController {
  @get('xxx')
  async characters (ctx, next) {

    ctx.body = {
      xxx: 'cdcdcdc'
    }
  }
}
