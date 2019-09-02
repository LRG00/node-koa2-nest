const mysql = require("mysql")
const Sequelize = require('sequelize');
var config = {
  database: 'abc', // 使用哪个数据库
  username: 'root', // 用户名
  password: '123456', // 口令
  host: '120.77.239.216', // 主机名
  port: 3306 // 端口号，MySQL默认3306
};

module.exports = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

// var Pet = sequelize.define('pet', {
//   id: {
//       type: Sequelize.STRING(50),
//       primaryKey: true
//   },
//   name: Sequelize.STRING(100),
//   gender: Sequelize.BOOLEAN,
//   birth: Sequelize.STRING(10),
//   createdAt: Sequelize.BIGINT,
//   updatedAt: Sequelize.BIGINT,
//   version: Sequelize.BIGINT
// }, {
//       timestamps: false
//   });
//   var now = Date.now();

//   (async () => {
//     var dog = await Pet.create({
//         id: 'd-' + now,
//         name: 'Odie',
//         gender: false,
//         birth: '2008-08-08',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     });
//     console.log('created: ' + JSON.stringify(dog));
// })();
