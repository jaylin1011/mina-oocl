// pages/news/news.js
// import { $http } from '../../utils/request'
import { getCollection } from '../../utils/db/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [
      // {
      //   id: 1,
      //   icon: 'https://636c-cloud-fr3dp-1301141943.tcb.qcloud.la/oocl/swiper/boat.jpg?sign=b0ea811d052632c345ba2db9ef8971f9&t=1580356995',
      //   title: '标题1',
      //   summary: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      //   "createdAt": { "$date": "2019-09-05T16:00:00.000Z" },
      // },
      // {
      //   id: 2,
      //   icon: 'https://636c-cloud-fr3dp-1301141943.tcb.qcloud.la/oocl/swiper/boat.jpg?sign=b0ea811d052632c345ba2db9ef8971f9&t=1580356995',
      //   title: '标题2',
      //   summary: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      //   "createdAt": { "$date": "2019-09-01T16:00:00.000Z" },
      // }
    ],
    tabs: [],
    categories: ['2019', '2018', '2017', '2016', '2015', '2014'],
    activeTab: 0,
    category: '2019'
  },
  goArticle(event) {
    // const { id } = event.currentTarget.dataset
    // wxp.navigateTo({
    //   url: `/pages/article/article`,
    //   // events: {
    //   //   // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    //   //   acceptDataFromOpenedPage: function(data) {
    //   //     console.log(data)
    //   //   },
    //   //   someEvent: function(data) {
    //   //     console.log(data)
    //   //   }
    //   // },
    // }).then(value => {
    //   console.log(value)
    // })
  },
  async getArticles(collection, conditions) {
    const { data: newsList } = await getCollection(collection, conditions)
    this.setData({
      newsList
    })
  },
  // async getNews() {
  //   const newsList = await $http({ url: '/articles' })
  //   this.setData({
  //     newsList
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onTabCLick(e) {
    const index = e.detail.index
    this.setData({ activeTab: index })
    this.getArticles('articles', { category: this.data.categories[index] })
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({ activeTab: index })
  },
  onLoad: function (options) {
    // this.getNews()
    this.getArticles('articles', { category: this.data.category })
    // const titles = [2014, 2015, 2016, 2017, 2018, 2019]
    const tabs = this.data.categories.map(title => ({ title }))
    this.setData({ tabs })
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
