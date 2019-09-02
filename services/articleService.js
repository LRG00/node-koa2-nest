
const articleModel = require('./../models/articleModel.js')

const article = {
  async getList(formData) {
    let resultData = await articleModel.getArticleList({ pageSize: +formData.pageSize, pageNo: +formData.pageNo })
    if (resultData.rows && resultData.rows.length) {
      return {
        data: resultData.rows,
        pageNo: +formData.pageNo,
        pageSize: +formData.pageSize,
        totalCount: resultData.count,
        totalPage: Math.ceil(resultData.count / (+formData.pageSize)),
      }
    } else {
      return resultData
    }
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
