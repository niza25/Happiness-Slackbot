import {combineReducers} from 'redux'
import login from './login'
import currentUser from './currentUser'
import signup from './signup'
import activeClasses from './activeClasses'

export default combineReducers({
  login,
  currentUser,
  signup,
  activeClasses
})