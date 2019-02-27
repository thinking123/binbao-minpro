import wepy from 'wepy'
import {baseUrl} from "../utils/constant";


let queue = []

export function initHttp(globalData) {
  queue = globalData.requestQueue
}

function http(url, data, loadingText, header, method = 'GET') {

  const app = wepy.$instance
  if (url.indexOf('/') == 0) {
    url = url.substr(1)
  }

  const token = wepy.$store.getState().common.token
  if (token && url != 'api/login/wxlogin') {
    //授权token
    header.token = token
  }

  // Content-Type: application/json
  header["Content-Type"] = "application/json"
  const _url = `${baseUrl}${url}`
  console.log('url', _url)
  queue.push(url)

  !!loadingText && wx.showLoading({
    title: loadingText,
    mask: true
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      data: data,
      header: header,
      method: method,
      success: res => {
        resolve(res ? res.data : null)
        queue.pop()
        !!loadingText && wx.hideLoading()
      },
      fail: err => {
        reject(err)
        queue.pop()
        !!loadingText && wx.hideLoading()
      }
    })
  })
}

export function get(url, params = {}, loadingText = null,headers = {}) {
  return http(url, params, loadingText, headers)
}

export function post(url, data = {}, loadingText = null, headers = {}) {
  return http(url, data, loadingText, headers, 'POST')
}
