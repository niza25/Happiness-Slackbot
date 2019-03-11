import {combineReducers} from 'redux'
import login from './login'
import currentUser from './currentUser'
import signup from './signup'
import averageAll from './averageAll'
import activeClasses from './activeClasses'

export default combineReducers({
  login,
  currentUser,
  signup,
  averageAll,
  activeClasses
})