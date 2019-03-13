import { DATA_FOR_CLASS_FETCHED } from '../actions/data'

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_FOR_CLASS_FETCHED:
      return action.data;
    default:
      return state
  }
}