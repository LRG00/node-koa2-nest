const dbUtils = require('./../utils/db-util')

const article = {

  async getArticleList( options ) {
    let _sql = `SELECT * from zj_articles`
    let result = await dbUtils.query( _sql )
    return result
  },



}


module.exports = article
