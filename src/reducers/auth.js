import { LOGIN_FAILED, LOGIN_SUCCEDED, DO_LOGIN, DO_LOGOUT } from '../constants/index'

const initialState = {
  isAuthenticated: false,
  isLoggingIn: false,
  username: '',
  loginError: ''
}

const auth = (state = initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case DO_LOGIN: 
      return {...state, isLoggingIn: true}
    case DO_LOGOUT:
      return {isLoggingIn: false, isAuthenticated: false }
    case LOGIN_SUCCEDED:
      return {...state, isAuthenticated: true, isLoggingIn: false, username: payload.username}
    case LOGIN_FAILED:
      return {...state, isAuthenticated: false, isLoggingIn: false, loginError: payload.error}
    default:
      return state
  }
} 

export default auth