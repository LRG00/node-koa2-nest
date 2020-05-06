
const tagModel = require('./../models/tagModel.js')

const tag = {
  async getList() {
    let resultData = await tagModel.getTagList()
    return resultData
  },
  async add(formData) {
    let resultData = await tagModel.add(formData) 
    return resultData
  },
}

module.exports = tag
