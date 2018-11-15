import "regenerator-runtime/runtime";
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers/index"
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)