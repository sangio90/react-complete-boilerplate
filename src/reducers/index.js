import { combineReducers } from 'redux'
import movements from './movements'
import auth from './auth'

export default combineReducers({
  movements, 
  auth
})