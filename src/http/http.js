import wepy from 'wepy'
import {baseUrl} from "../utils/constant";
import {LOADINGBAR , LOADINGTEXT} from '../store/types/http'

let queue = []

export function initHttp(globalData) {
  queue = globalData.requestQueue
}
let time = null
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

  // if(time){
  //   clearTimeout(time)
  //   !!loadingText && wx.showLoading({
  //     title: loadingText,
  //     mask: true
  //   })
  // }

  !!loadingText && wx.showLoading({
    title: loadingText,
    mask: true
  })


  wepy.$store.dispatch({ type : 'LOADINGBAR' , payload : true })
  // wepy.$store.dispatch({ type : 'LOADINGTEXT' , payload : loadingText })

  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      data: data,
      header: header,
      method: method,
      success: res => {
        resolve(res ? res.data : null)
        // queue.pop()
        wepy.$store.dispatch({ type : 'LOADINGBAR' , payload : false })
        // wepy.$store.dispatch({ type : 'LOADINGTEXT' , payload : '' })

        // time = setTimeout(()=>{
        //   !!loadingText && wx.hideLoading()
        //   time = null
        //   clearTimeout(time)
        // } , 100)
        !!loadingText && wx.hideLoading()

      },
      fail: err => {
        reject(err)
        // queue.pop()
        wepy.$store.dispatch({ type : 'LOADINGBAR' , payload : false })
        // wepy.$store.dispatch({ type : 'LOADINGTEXT' , payload : '' })
        // time = setTimeout(()=>{
        //   !!loadingText && wx.hideLoading()
        //   time = null
        //   clearTimeout(time)
        // } , 100)

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
