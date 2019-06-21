
const articleModel = require('./../models/articleModel.js')

const article = {
  async getList() {
    let resultData = await articleModel.getArticleList()
    return resultData
  },
}

module.exports = article
