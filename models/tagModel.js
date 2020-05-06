const sequelize = require("../utils/db-util");
let Sequelize = require("sequelize");
// 创建 Model
let Tag = sequelize.define(
  "zj_labels",
  {
    label_name: { type: Sequelize.STRING },
    label_alias: { type: Sequelize.STRING },
    label_description: { type: Sequelize.INTEGER }
  },
  {
    freezeTableName: false,
    timestamps: false
  }
);

// 查找用户
module.exports = {
  getTagList: () => {
    return Tag.findAndCountAll({
      limit: 10,
      offset: 0
    });
  },
  add: (params) => {
    return Tag.create(params);
  },
  update: (params) => {
    return Tag.update(params, {
        where: {id: params.id}
    });
  },
  detele: (params) => {
    return Tag.create(params);
  },
};


