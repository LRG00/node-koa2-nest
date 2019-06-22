
const articleModel = require('./../models/articleModel.js')

const article = {
  async getList() {
    let resultData = await articleModel.getArticleList()
    return resultData
  },
  async add(formData) {
    let resultData = await articleModel.add(formData)
    return resultData
  },
}

module.exports = article
