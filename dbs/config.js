// module.exports =  ({
//   dbs: 'mongodb://leeruigan:as123456@ds119702.mlab.com:19702/blog'
// })

const config = {
  // 启动端口
  port: 3000,

  // 数据库配置
  database: {
    PORT: '3306',
    host     : '149.28.161.52',   // 数据库地址
    user     : 'root',    // 数据库用户
    password : 'as123456789',  // 数据库密码
    database : 'abc'  // 选中数据库
  }
}

module.exports = config