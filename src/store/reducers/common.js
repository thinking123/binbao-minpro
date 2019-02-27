import { handleActions } from 'redux-actions'
import {WX_LOGIN , STEP , WX_STEP , ISSTARTBONUS , BANNERIMAGES , ANSWER,SIGN ,NAVTYPE} from '../types/http'

const defaultState = {
  token: '',
  code: '',
  cdnUrl: 'https://cdnmakattan.ysmine.com/',
  medalNum:'0',
  wheatIntegral:'0',
  wheatIntegralSum:'0',
  wheatRank:'0',
  bannerImages:[],
  isStartBonus:false,
  answer:null,
  navType:'',
}


export default handleActions({
  [WX_LOGIN](state, {payload:{token}}) {
    console.log('token _wxLogin toekn' , token )
    return {
      ...state,
      token
    }
  },
  [WX_STEP](state, {payload:{encryptedData,iv}}) {
    return {
      ...state,
      encryptedData,
      iv
    }
  },
  [STEP](state, {payload:{medalNum, wheatIntegral, wheatIntegralSum, wheatRank}}) {
    return {
      ...state,
      medalNum,
      wheatIntegral,
      wheatIntegralSum,
      wheatRank
    }
  },
  [ISSTARTBONUS](state, {payload:{isStartBonus}}) {
    return {
      ...state,
      isStartBonus
    }
  },
  [BANNERIMAGES](state, {payload:{bannerImages}}) {
    return {
      ...state,
      bannerImages
    }
  },
  [ANSWER](state, action) {
    const answer = action.payload
    return {
      ...state,
      answer
    }
  },
  [SIGN](state, action) {
    const sign = action.payload
    return {
      ...state,
      sign
    }
  },
  [NAVTYPE](state, action) {
    console.log('action' , action.payload)
    return {
      ...state,
      navType:action.payload
    }
  },
}, defaultState)
