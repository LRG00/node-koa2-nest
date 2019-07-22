const host = require('./config').host

var scence = 0;
// var code;
App({
  // onShow: function (options) {
    onLaunch: function (options) {
    // 展示本地存储能力
    var that = this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
      // wx.reLaunch({
      //   url: '/pages/index/index'
      // })
    that.getwxLogin();

    setInterval(function () {
      that.getlogin()
    }, 900000) //循环时间 这里是1秒 
      
  },
  getwxLogin() {
    var that = this;
    wx.login({
      success(res) {
        if (res.code) {
          that.globalData.code = res.code
          //发起网络请求
          wx.getSetting({
            success(res) {
              console.log(res.authSetting)
              if (res.authSetting['scope.userInfo']) {
                console.log(1)
                wx.getUserInfo({
                  success: function (res) {
                    console.log(res)
                    that.globalData.userInfo = res.userInfo;
                    that.globalData.encryptedData = res.encryptedData;
                    that.globalData.iv = res.iv;
                    // that.getlogin();
                    // if (that.globalData.url == 0){
                    //   wx.reLaunch({
             