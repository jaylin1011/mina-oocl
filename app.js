//app.js
import wxp from './utils/wxp'
import { CLOUD_ENV } from './config'
App({
  onLaunch: function () {
    // init cloud dev
    wx.cloud.init({
      env: CLOUD_ENV
    })
    // 登录
    wxp.login().then(res => { })

    wxp.getSetting()
      .then(res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          return wxp.getUserInfo()
        }
      })
      .then(res => {
        // 可以将 res 发送给后台解码出 unionId
        this.globalData.userInfo = res.userInfo

        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        if (this.userInfoReadyCallback) {
          this.userInfoReadyCallback(res)
        }
      })
  },
  globalData: {
    userInfo: null
  }
})
