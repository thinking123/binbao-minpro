export function numberWithCommas(x, step = 3) {

  const regStr = `\\B(?=(\\d{${step}})+(?!\\d))`

  // console.log('reg' , regStr)

  const reg = new RegExp(regStr, 'g')
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return x.toString().replace(reg, ',')
}

export function isEmpty(str) {
  // if(typeof str !== 'string' || !str){
  //   return false
  // }
  str = str.trim()
  return str.length === 0
}

export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  const rand = Math.floor(Math.random() * (max - min + 1)) + min
  console.log('rand', rand)
  return rand
}

export function isMorning() {
  const hour = (new Date()).getHours()
  //5 - 7
  return hour >= 5 && hour <= 7
}

export function showModal(content , title = 'tip' ) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: title,
      content: content,
      success: resolve,
      fail: reject
    })
  })
}

// export function urlParams(url , params) {
//   const p =  Object.keys(params).map(function(key) {
//     return [key, params[key]].map(encodeURIComponent).join("=");
//   }).join("&");
//   if(p.length === 0){
//     return url
//   }
//   return `${url}?${p}`
// }


export function showLoading(title , mask = true) {
  wx.showLoading({
    title: title,
    mask: mask
  })
}

export function hideLoading() {
  wx.hideLoading()
}

export function showMsg(title , showIcon = false) {
  if(!title){
    return
  }

  let icon = 'success'
  let isError = title instanceof Error ||
    typeof title !== 'string' ||
    //小程序 系统error
    (title.errMsg && title.errMsg.length > 0)

  if (isError) {
    //本地图标
    icon = 'fail'
    title = title.message ? title.message : title.errMsg
    title = title ? title : 'error'
  }

  let options = {
    title:title,
    mask:true
  }

  options = Object.assign(options , {icon : showIcon ? icon : 'none'})
  wx.showToast(options)

  console.log(title , icon , isError)
}



export function urlParams(url, params , noEncode = false) {
  let p = ''
  if(noEncode){
    p = Object.keys(params).map(function (key) {
      return [key, params[key]].join("=");
    }).join("&");
  }else{
    p = Object.keys(params).map(function (key) {
      return [key, params[key]].map(encodeURIComponent).join("=");
    }).join("&");
  }

  if (p.length === 0) {
    return url
  }
  return `${url}?${p}`
}


export async function downloadFile(url) {
  return new Promise((resolve, rej) => {
    wx.downloadFile({
      url: url,
      success: resolve,
      fail: rej
    })
  })
}
