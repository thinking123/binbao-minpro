import {wxLogin} from '../../http/http-business'
import {WX_LOGIN} from '../types/http'
import { createAction } from 'redux-actions'

export const _wxLogin = createAction(WX_LOGIN, async (code , avatarUrl , nickName,gender) => {
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(1)
  //   }, 1000)
  // })
  console.log('_wxLogin' , code , avatarUrl , nickName,gender)
  const {token} = await wxLogin(code ,
    avatarUrl,
    nickName,
    gender
  )



  return token
})


