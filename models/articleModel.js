const dbUtils = require('./../utils/db-util')

const article = {

  async getArticleList( options ) {
    let _sql = `SELECT * from zj_articles`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      // result = result[0]
      let users = await this.getName( result.user_id )
      // result.user_name = Array.isArray(user) && result.length > 0 ? user[0].user_name : ''
      result.map(item => {
        users.map(ele => {
          if (item.user_id === ele.user_id) {
            item.user_name = ele.user_name
          }
        })
        return item
      })
    } else {
      result = []
    }
    return result
  },
  async getName( options ) {
    let _sql = `SELECT * from zj_users`
    let result = await dbUtils.query( _sql )
    return result
  },
  async add( options ) {
    console.log(options, 'options')
    let _sql = `SELECT * from zj_users`
    let result = await dbUtils.insertData( 'zj_articles', options )
    return result
  },



}


module.exports = article
