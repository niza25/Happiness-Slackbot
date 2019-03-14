import {combineReducers} from 'redux'
import login from './login'
import currentUser from './currentUser'
import signup from './signup'
import activeClasses from './activeClasses'
import averageAll from './averageAll'
import dataForClass from './dataForClass'

export default combineReducers({
  login,
  currentUser,
  signup,
  activeClasses,
  averageAll,
  dataForClass
})