import { controller, get, post, put, log, convert, required } from '../decorator/router'

@controller('/')
export class indexController {
  @get('/')
  async characters (ctx, next) {
    const result = 'xxx'
    await ctx.render('index', {
      result,
    })
  }
}
