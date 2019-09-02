const userLoginModel = require("./../models/userLoginModel");

const user = {
  async signIn(formData) {
    let resultData = await userLoginModel.getOneByUserNameAndPassword({
      user_name: formData.user_name,
      user_password: formData.user_password
    });
    return resultData;
  }
};

module.exports = user;
