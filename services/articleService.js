
const articleModel = require('./../models/articleModel.js')

const article = {
  async getList() {
    let resultData = await articleModel.getArticleList({limit: 10, pageNo: 1})
    return resultData
  },
  async add(formData) {
    let resultData = await articleModel.add(formData)
    return resultData
  },
  async update(formData) {
    let resultData = await articleModel.update(formData)
    return resultData
  },
}

module.exports = article
