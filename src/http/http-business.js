import { get, post } from './http'
import { urlParams } from '../utils/common'

function parseRes(res, errMsg, resolveStatus = []) {
  if (!!res && res.status && res.status.indexOf('2') > -1) {
    return res.rows ? res.rows : res
  } else {
    const msg = res && res.message ? res.message : errMsg
    throw new Error(msg ? msg : 'error')
  }
}

//登入
export function wxLogin(code, userHead, userName, userSex) {
  const url = '/api/login/wxlogin'
  const loadingText = '正在登入...'
  const errMsg = '登入失败'
  // const data = {
  //   code: code,
  //   userHead: userHead,
  //   userName: userName,
  //   userSex: userSex
  // }
  const data = {
    code,
    userHead,
    userName,
    userSex
  }
  return post(url, data, loadingText).then(res => parseRes(res, errMsg))
}

//发送微信运动步数
export function nowStep(encryptedData, iv) {
  const url = '/api/login/nowStep'
  const loadingText = '发送微信运动步数...'
  const errMsg = '发送微信运动步数失败'
  const data = {
    encryptedData: encryptedData,
    iv: iv
  }
  return post(url, data, loadingText).then(res => parseRes(res, errMsg))
}

//获取微信运动步数
export function getStep() {
  const url = '/api/login/msg'
  const loadingText = '获取微信运动步数...'
  const errMsg = '获取微信运动步数失败'
  const data = {}
  return get(url, data, loadingText).then(res => parseRes(res, errMsg))
}


//获取微信运动步数
export function getWXStep() {
  const url = '/api/login/step'
  const loadingText = '获取运动步数...'
  const errMsg = '获取运动步数失败'
  const data = {}
  return get(url, data, loadingText).then(res => parseRes(res, errMsg))
}




//是否开始瓜分现金
export function isOpenCarveUp() {
  const url = '/api/carveUp/isOpenCarveUp'
  const loadingText = '加载数据...'
  const errMsg = '获取是否开始瓜分现金失败'
  const data = {}
  return post(url, data ,loadingText).then(res => {
    if (res && res.status == '9009') {
      return true
    } else if (res && res.status == '9010') {
      return false
    } else {
      throw new Error(res.message ? res.message : errMsg)
    }
  })
}

//作用: 瓜分现金
export function carveUp() {
  const url = '/api/carveUp'
  const loadingText = '瓜分现金...'
  const errMsg = '瓜分现金失败'
  const data = {}
  return post(url, data, loadingText).then(res => parseRes(res, errMsg))
}

//获取轮播图
export function getBanner() {
  const url = '/api/banner/getBanner'
  const loadingText = '获取轮播图...'
  const errMsg = '获取轮播图失败'
  const data = {}
  return post(url, data, loadingText).then(res => parseRes(res, errMsg))
}

//签到
export function sign() {
  const url = '/api/sign/sign'
  const loadingText = '签到...'
  const errMsg = '签到失败'
  const data = {}
  return post(url, data, loadingText).then(res => {
    if (res && res.status == '4001') {
      return {...res.rows , ...{hadSign:true}}
    } else {
      return parseRes(res, errMsg)
    }
  })


  // return post(url, data, loadingText).then(res => {
  //   if (res && res.status == '4001') {
  //     return false
  //   } else {
  //     return parseRes(res, errMsg)
  //   }
  // })

}

// //答题
// export function sign() {
//   const url = '/api/knowledge/answer'
//   const loadingText = '签到...'
//   const errMsg = '签到失败'
//   const data = {}
//   return post(url, data, loadingText).then(res => {
//     if (res && res.status == '4001') {
//       return false
//     } else if (!!res && res.status.indexOf('2') > -1) {
//       return true
//     }  else {
//       throw new Error(res.message ? res.message : errMsg)
//     }
//   })
// }

//作用: 总排名
export function totalRanking() {
  const url = '/api/wheatChallenge/totalRanking'
  const loadingText = '获取总排名...'
  const errMsg = '获取总排名失败'
  const data = {}
  return get(url, data, loadingText).then(res => parseRes(res, errMsg))
}

//总排行榜 领取奖品
export function totalReceive(prizeName, prizePhone,prizeAddress) {
  const url = '/api/wheatChallenge/totalReceive'
  const loadingText = '领取奖品...'
  const errMsg = '领取奖品失败'
  const data = {
    prizeAddress,
    prizeName,
    prizePhone
  }
  return post(url, data, loadingText).then(res => parseRes(res, errMsg))
}

//作用: 周排名
export function weekRanking() {
  const url = '/api/wheatChallenge/weekRanking'
  const loadingText = '获取周排名...'
  const errMsg = '获取周排名失败'
  const data = {}
  return get(url, data, loadingText).then(res => parseRes(res, errMsg))
}

//周排行榜 领取奖品
export function weekReceive( prizeName, prizePhone,prizeAddress) {
  const url = '/api/wheatChallenge/weekReceive'
  const loadingText = '领取奖品...'
  const errMsg = '领取奖品失败'
  const data = {
    prizeAddress,
    prizeName,
    prizePhone
  }
  return post(url, data, loadingText).then(res => parseRes(res, errMsg))
}

//获取题目
export function getAnswer() {
  const url = '/api/knowledge/get'
  const loadingText = '获取题目...'
  const errMsg = '获取题目失败'
  const data = {}
  return post(url, data, loadingText).then(res => {
    if (res && res.status == '4002') {
      return false
    } else {
      return parseRes(res, errMsg)
    }
  })
}

//答题
export function answerQuestion(id, userAnswer) {
  let url = '/api/knowledge/answer'
  const loadingText = '答题...'
  const errMsg = '答题失败'
  const data = { id, userAnswer }
  url = urlParams(url, data, true)
  return post(url, {}, loadingText).then(res => {
    if (res && res.status == '4003') {
      return true
    } else if (res && res.status == '4004') {
      return false
    } else {
      res.status = ''
      return parseRes(res, errMsg)
    }
  })
}



//麦力值抽奖填写收货信息
export function setPrizeInfo(id, prizeName, prizePhone,prizeAddress) {
  let url = '/api/prize/answer'
  const loadingText = '正在发生数据...'
  const errMsg = '填写收货信息失败'
  const data = { id, prizeName, prizePhone,prizeAddress }
  url = urlParams(url, data, true)
  return post(url, {}, loadingText).then(res => parseRes(res, errMsg))
}

//麦力值抽奖 奖品列表
export function prizelist() {
  const url = '/api/prize/prizelist'
  const loadingText = '获取奖品列表...'
  const errMsg = '获取奖品列表失败'

  return post(url, {}, loadingText).then(res => parseRes(res, errMsg))
}

//麦力值抽奖 抽奖
export function getPrize() {
  const url = '/api/prize/prize'
  const loadingText = '抽奖...'
  const errMsg = '抽奖失败'

  return post(url, {}, loadingText).then(res => {
    if (res && res.status == '4006') {
      return false
    }  else {
      return parseRes(res, errMsg)
    }
  })
}
