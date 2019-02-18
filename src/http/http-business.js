import {get, post} from "./http";
import {urlParams} from '../utils/common'

function parseRes(res, errMsg, resolveStatus = []) {
  if (!!res && res.status.indexOf('2') > -1) {
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
  const data = {
    code: code,
    userHead: userHead,
    userName: userName,
    userSex: userSex
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
