const dbUtils = require('./../utils/db-util')

const user = {

  async getuserList( options ) {
    let _sql = `SELECT * from zj_users`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result
    } else {
      result = []
    }
    return result
  },
  async add( options ) {
    let result = await dbUtils.insertData( 'zj_users', options )
    return result
  },



}


module.exports = user
