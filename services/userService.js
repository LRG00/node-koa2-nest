
const userModel = require('./../models/userModel.js')

const user = {
  async getList() {
    let resultData = await userModel.getuserList()
    return resultData
  },
  async add(formData) {
    let resultData = await userModel.add(formData)
    return resultData
  },
}

module.exports = user
