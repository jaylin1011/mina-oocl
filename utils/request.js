import wxp from './wxp'
import BASE_URL from '../config'

const $http = options => {

  const { url } = options
  options.url = `${BASE_URL}${url}`
  wx.showLoading({
    title: '拼命加载中...'
  })
  return wxp.request({ ...options })
    .then(value => value.data)
    .catch(reason => reason)
    .finally(() => {
      wx.hideLoading()
    })
}

export {
  $http
}
