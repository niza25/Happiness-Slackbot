import {combineReducers} from 'redux'
import login from './login'
import currentUser from './currentUser'
import signup from './signup'
import averageAll from './averageAll'

export default combineReducers({
  login,
  currentUser,
  signup,
  averageAll
})