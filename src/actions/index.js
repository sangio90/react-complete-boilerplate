import { ADD_MOVEMENT, ASYNC_ADD_MOVEMENT, ASYNC_DO_LOGIN, DO_LOGOUT } from '../constants/index'

export function addMovement(movement) {
  return {
    type: ADD_MOVEMENT,
    payload: movement
  }
}

export function asyncAddMovement(movement, history) {
  return {
    type: ASYNC_ADD_MOVEMENT,
    payload: {
      movement, 
      history
    }
  }
}

export function doLogin(username, password) {
  return {
    type: ASYNC_DO_LOGIN,
    payload: {
      username,
      password
    }
  }
}

export function doLogout() {
  return {
    type: DO_LOGOUT
  }
}