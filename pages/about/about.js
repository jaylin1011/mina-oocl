// pages/about/about.js
import { getCollection } from '../../utils/db/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    links: [
      {
        id: 'widget',
        name: '业务相关',
        open: false,
        lists: ['video-swiper', 'emoji', 'index-list', 'tabs', 'vtabs']
      }
    ]
  },
  async getLinks(collection, conditions) {
    const { data: links } = await getCollection(collection, conditions)
    this.setData({
      links
    })
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, links = this.data.links;
    for (var i = 0, len = links.length; i < len; ++i) {
      if (links[i]._id == id) {
        links[i].open = !links[i].open
      } else {
        links[i].open = false
      }
    }
    this.setData({
      links: links
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLinks('links')
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
