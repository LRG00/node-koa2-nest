const dbUtils = require('./../utils/db-util')

const cate = {

  async getcateList( options ) {
    let _sql = `SELECT * from zj_sorts`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result
    } else {
      result = []
    }
    return result
  },
  async add( options ) {
    let result = await dbUtils.insertData( 'zj_sorts', options )
    return result
  },



}


module.exports = cate
