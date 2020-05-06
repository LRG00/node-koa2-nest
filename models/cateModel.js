const sequelize = require("../utils/db-util");
let Sequelize = require("sequelize");
// 创建 Model
let Cate = sequelize.define(
  "zj_sorts",
  {
    sort_name: { type: Sequelize.STRING },
    sort_alias: { type: Sequelize.STRING },
    sort_description: { type: Sequelize.INTEGER },
    parent_sort_id: { type: Sequelize.INTEGER },
  },
  {
    freezeTableName: false,
    timestamps: false
  }
);

// 查找用户
module.exports = {
  getcateList: () => {
    return Cate.findAndCountAll({
      limit: 10,
      offset: 0
    });
  },
  add: (params) => {
    return Cate.create(params);
  },
  update: (params) => {
    return Cate.update(params, {
        where: {id: params.id}
    });
  },
  detele: (params) => {
    return Cate.create(params);
  },
};



