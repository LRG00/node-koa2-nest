
const sequelize = require("../utils/db-util");
let Sequelize = require("sequelize");
// 创建 Model
let User = sequelize.define(
  "zj_users",
  {
    user_ip: { type: Sequelize.STRING },
    user_name: { type: Sequelize.STRING },
    user_password: { type: Sequelize.STRING },
    user_email: { type: Sequelize.STRING },
    user_profile_photo: { type: Sequelize.STRING },
    user_level: { type: Sequelize.STRING },
    user_rights: { type: Sequelize.STRING },
    user_registration_time: { type: Sequelize.DATE },
    user_birthday: { type: Sequelize.DATE },
    user_age: { type: Sequelize.INTEGER },
    user_telephone_number: { type: Sequelize.INTEGER },
    user_nickname: { type: Sequelize.STRING },
    
  },
  {
    freezeTableName: false,
    timestamps: false
  }
);

// 查找用户
module.exports = {
  getuserList: () => {
    return User.findAndCountAll({
      limit: 10,
      offset: 0
    });
  },
  add: (params) => {
    return User.create(params);
  },
  update: (params) => {
    return User.update(params, {
        where: {id: params.id}
    });
  },
  detele: (params) => {
    return User.create(params);
  },
};



