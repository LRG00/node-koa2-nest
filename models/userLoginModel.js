const sequelize = require("../utils/db-util");
let Sequelize = require("sequelize");

// 创建 Model
let User = sequelize.define(
  "zj_users",
  {
    // 指定映射的字段类型，字段名，例如数据库中 user 表中的 username 字段映射成 username
    user_name: {
      type: Sequelize.STRING
      // field: 'user_name'
    },
    user_id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    // 如果不指定 field，会自动映射相同名称的字段
    user_password: {
      type: Sequelize.STRING
    }
  },
  {
    // freezeTabelName 为 true 时不会在库中映射表时增加复数表名
    // 该选项为 true 时，user 在映射时映射成 user，而为 false 时会映射成users
    freezeTableName: false,
    timestamps: false
  }
);

// 创建或同步表
// User.sync() 会返回一个 Promise 对象
// force = true 时会把存在的表先 drop 掉再创建，好怕怕
let user = User.sync({ force: false });

// 查找用户
module.exports = {
  getOneByUserNameAndPassword: ({ user_name, user_password }) => {
    return User.findOne({
      where: {
        user_name: user_name,
        user_password: user_password
      }
    });
  }
};
