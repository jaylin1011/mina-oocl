// pages/home/home.js
import { getCollection } from '../../utils/db/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',
    isOpened: false,
    swiperList: [],
    gridList: [],
    serviceList: [],
    highlightList: [],
    newsList: []
  },
  async getSwiper(collection) {
    const { data: swiperList } = await getCollection(collection)
    this.setData({
      swiperList
    })
  },
  async getIcons(collection) {
    const { data: gridList } = await getCollection(collection)
    this.setData({
      gridList
    })
  },
  async getService(collection) {
    const { data: serviceList } = await getCollection(collection)
    this.setData({
      serviceList
    })
  },
  async getHighlights(collection) {
    const { data: highlightList } = await getCollection(collection)
    this.setData({
      highlightList
    })
  },
  async getArticles(collection, conditions) {
    const { data } = await getCollection(collection, conditions)
    let newsList = data.slice(0, 3)
    this.setData({
      newsList
    })
  },
  handleTap() {
    wx.showModal({
      title: '温馨提示',
      content: '此功能涉及商业机密，尚未具体实现，敬请期待~',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          wx.hideToast()
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiper('swipers')
    this.getIcons('icons')
    this.getService('services')
    this.getHighlights('highlights')
    this.getArticles('articles', { category: '2019' })
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
