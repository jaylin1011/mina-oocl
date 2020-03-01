// pages/picture/picture.js
import { getCollection } from '../../utils/db/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictures: [],
    show: false,
    imgUrls: [],
    current: 0
  },
  async getPictures(collection, conditions) {
    const { data: pictures } = await getCollection(collection, conditions)
    this.setData({
      pictures
    })
  },
  change(e) {
    console.log('current index has changed', e.detail)
  },
  delete(e) {
    console.log('delete', e.detail)
  },
  hide() {
      this.setData({
        show: false,
        current: 0
      })
  },
  handleTap(e) {
    let {index} = e.currentTarget.dataset
    let { imgUrls } = this.data.pictures[index]
      this.setData({
        show: true,
        imgUrls
      })
  },
  onLoad(){
    this.getPictures('pictures')
  }
})
