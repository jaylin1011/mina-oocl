// // pages/link/link.js
// import { getCollection } from '../../utils/db/index'

// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     detail: {}
//   },
//   async getDetail(collection, conditions) {
//     const { data } = await getCollection(collection, conditions)
//     console.log(data)
//     const detail = data[0]
//     this.setData({ detail })
//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     const id = '8fb57cb9-ba39-446f-bd3a-b695629c8121'
//     this.getDetail('link_details', { _id: id })
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })
import { getCollection } from '../../utils/db/index'

Page({
  data: {
    vtabs: [],
    activeTab: 0,
    activeContent: {}
  },
  async getLinks(collection, conditions) {
    const { data } = await getCollection(collection, conditions)
    return data[0].lists
  },
  onLoad(options) {
    const {id} = options
    this.getLinks('links', { _id: id }).then(vtabs => {
      // titles.forEach((item, index) => (item.title === title && this.setData({ activeTab: index})))
      // const vtabs = titles.map(item => ({ title: item }))
      // const vtabs = titles.map(item => ({title: item.title}))
      this.setData({ 
        vtabs,
        activeContent: vtabs[this.data.activeTab]
      })
    })
    // const titles = ['热搜推荐', '手机数码', '家用电器',
    //   '图书音像', '房产', '电脑办公']
  },

  onTabCLick(e) {
    const {index} = e.detail
    const activeContent = this.data.vtabs[index]
    this.setData({
      activeTab: index,
      activeContent
    })
  },
  onChange(e) {
    const { index } = e.detail
    const activeContent = this.data.vtabs[index]
    this.setData({
      activeTab: index,
      activeContent
    })
  }

})


