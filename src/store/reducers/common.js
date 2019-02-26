import { handleActions } from 'redux-actions'

const defaultState = {
  token: '',
  cdnUrl: 'https://cdnmakattan.ysmine.com/'
}

// import { handleActions } from 'redux-actions'
// import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'

export default handleActions({
  token(state, token) {
    console.log('token' , token)
    return {
      ...state,
      token
    }
  }
}, defaultState)
