const sequelize = require("../utils/db-util");
let Sequelize = require("sequelize");

// 创建 Model
let Articles = sequelize.define(
  "zj_articles",
  {
    article_title: { type: Sequelize.STRING },
    article_content: { type: Sequelize.STRING },
    user_id: { type: Sequelize.INTEGER },
    article_id: { type: Sequelize.INTEGER, primaryKey: true },
    article_views: { type: Sequelize.STRING },
    article_comment_count: { type: Sequelize.INTEGER },
    article_like_count: { type: Sequelize.INTEGER },
    article_date: { type: Sequelize.DATE }
  },
  {
    freezeTableName: false,
    timestamps: false
  }
);

// 查找用户
module.exports = {
  getArticleList: ({ pageSize, pageNo }) => {
    return Articles.findAndCountAll({
      limit: pageSize,
      offset: (pageNo - 1) * pageSize
    });
  },
  add: (params) => {
    return Articles.create(params);
  },
  update: (params) => {
    return Articles.update(params, {
        where: {article_id: params.article_id}
    });
  },
  detele: (params) => {
    return Articles.create(params);
  },
};

