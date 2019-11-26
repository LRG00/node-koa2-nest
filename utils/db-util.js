const mysql = require("mysql")
// const Sequelize = require('sequelize');
import Sequelize from 'sequelize'
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
