// pages/article/article.js
import { getCollection } from '../../utils/db/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    about: '东方海外」 及「 OOCL」 分别是东方海外货柜航运有限公司(“OOCLL “) 及OOCL (Europe) Limited 在提供航运服务上所使用的商号; 两者均是在香港联交所上市的东方海外(国际) 有限公司(0316) 的全资附属公司。东方海外是一家建基于香港的国际集装箱运输及物流服务公司, 于一百多个主要城市设有超过一百二十个办事处, 所提供的服务航线连系亚洲、欧洲、美洲、非洲、地中海、印度次大陆、中东及澳洲/纽西兰, 覆盖了东西主要贸易地区。作为国际间具领导地位的营运商之一，东方海外在中国全国各地提供全面的物流及运输服务，同时亦是把信息科技及电子商贸应用在全方位货物运输过程之业内先锋。'
  },
  async getArticleById(collection, conditions) {
    const { data } = await getCollection(collection, conditions)
    const article = data[0]
    this.setData({ article })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options
    this.getArticleById('articles', { _id: id })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
