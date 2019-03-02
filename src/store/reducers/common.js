import { handleActions } from 'redux-actions'
import {
  WX_LOGIN,
  STEP,
  WX_STEP,
  ISSTARTBONUS,
  BANNERIMAGES,
  ANSWER,
  SIGN,
  NAVTYPE,
  PRIZE,
  LOADINGBAR,
  LOADINGTEXT,
  TOTALSTEP
} from '../types/http'

const defaultState = {
  token: '',
  code: '',
  cdnUrl: 'https://cdnmakattan.ysmine.com/',
  medalNum: '0',
  wheatIntegral: '0',
  wheatIntegralSum: '0',
  wheatRank: '',
  totalStep: '0',
  bannerImages: [],
  isStartBonus: false,
  answer: null,
  prize: null,
  navType: '',
  isLoading: false,
  loadingText: '正在加载...',
  sign:null
}

const loadQueue = []

export default handleActions({
  [LOADINGBAR](state, { payload: loading }) {

    if (loading) {
      loadQueue.push({})
    } else {
      loadQueue.pop()
    }

    console.log('loading leng', loadQueue.length)
    return {
      ...state,
      isLoading: loadQueue.length > 0
    }
  },
  [WX_LOGIN](state, { payload: { token } }) {
    console.log('token _wxLogin toekn', token)
    return {
      ...state,
      token
    }
  },
  [LOADINGTEXT](state, { payload: loadingText }) {
    console.log('loading text', loadingText)
    loadingText = loadingText ? loadingText : '正在加载...'

    return {
      ...state,
      loadingText
    }
  },
  [WX_STEP](state, { payload: { encryptedData, iv } }) {
    return {
      ...state,
      encryptedData,
      iv
    }
  },
  [STEP](state, { payload: { medalNum, wheatIntegral, wheatIntegralSum, wheatRank } }) {
    return {
      ...state,
      medalNum,
      wheatIntegral,
      wheatIntegralSum,
      wheatRank
    }
  },
  [ISSTARTBONUS](state, { payload: { isStartBonus } }) {
    return {
      ...state,
      isStartBonus
    }
  },
  [BANNERIMAGES](state, { payload: { bannerImages } }) {
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
  [PRIZE](state, action) {
    const prize = action.payload
    return {
      ...state,
      prize
    }
  },
  [NAVTYPE](state, action) {
    console.log('action', action.payload)
    return {
      ...state,
      navType: action.payload
    }
  },
  [TOTALSTEP](state, {payload:{totalStep}}) {
    console.log('totalStep', totalStep)
    return {
      ...state,
      totalStep: totalStep
    }
  }
}, defaultState)
