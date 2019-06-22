
const cateModel = require('./../models/cateModel.js')

const cate = {
  async getList() {
    let resultData = await cateModel.getcateList()
    return resultData
  },
  async add(formData) {
    let resultData = await cateModel.add(formData)
    return resultData
  },
}

module.exports = cate
