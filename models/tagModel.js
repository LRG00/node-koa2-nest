const dbUtils = require('./../utils/db-util')

const tag = {

  async gettagList( options ) {
    let _sql = `SELECT * from zj_labels`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result
    } else {
      result = []
    }
    return result
  },
  async add( options ) {
    console.log(options, 'options')
    let result = await dbUtils.insertData( 'zj_labels', options )
    return result
  },



}


module.exports = tag
