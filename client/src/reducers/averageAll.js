import { AVERAGE_ALL_FETCHED } from '../actions/data'

export default (state = null, action = {}) => {
  switch (action.type) {
    case AVERAGE_ALL_FETCHED:
      return action.averageAll;
    default:
      return state
  }
}