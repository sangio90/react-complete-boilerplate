import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import { ADD_MOVEMENT, LOGIN_FAILED, LOGIN_SUCCEDED, DO_LOGIN, ASYNC_ADD_MOVEMENT, ASYNC_DO_LOGIN } from './constants/index'
import { useFakeLogin, loginUrl } from './config/auth'

function* watchAddMovementAsync() {
  yield takeEvery(ASYNC_ADD_MOVEMENT, addMovementAsync)
}

function* watchDoLogin() {
  yield takeEvery(ASYNC_DO_LOGIN, doLogin)
}

function* addMovementAsync(action) {
  yield delay(1000)
  yield put({ type: ADD_MOVEMENT, payload: action.payload.movement })
  yield action.payload.history.push('/')
}

function* doLogin(action) {
  let response
  yield put({ type: DO_LOGIN })
  try {
    response = yield call(loginApi, action.payload.username, action.payload.password)
    if (response.success) {
      yield put({type: LOGIN_SUCCEDED, payload: response})
    } else {
      yield put({type: LOGIN_FAILED, payload: response})
    }
  } catch (error) {
    console.log(error)
    yield put({ type: LOGIN_FAILED, payload: response})
  }
}

function loginApi(username, password) {
  if (useFakeLogin) {
    return fakeLogin()
  }
  
  return fetch(loginUrl + '?username=' + username, {
    method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
  }).then(res => res.json())
  .catch(err=> err);
}

function fakeLogin()
{
  return {
    success: true,
    username: 'debug'
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchAddMovementAsync(),
    watchDoLogin()
  ])
}
