import { ACTIVE_CLASSES_FETCHED } from '../actions/data'

export default (state = null, action = {}) => {
  switch (action.type) {
    case ACTIVE_CLASSES_FETCHED:
      return action.activeClasses;
    default:
      return state
  }
}