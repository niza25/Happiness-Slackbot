import request from 'superagent'

export const AVERAGE_ALL_FETCHED = 'AVERAGE_FETCHED'
export const ACTIVE_CLASSES_FETCHED = 'ACTIVE_CLASSES_FETCHED'


const baseUrl = 'http://localhost:4000'

// get the average to display in buttons
const gotAverageAll = averageAll => ({
  type: AVERAGE_ALL_FETCHED,
  averageAll
})
// get the average to display in buttons
export const getAverageAll = () => (dispatch, getState) => {
  if (getState().average.length) return
  request(`${baseUrl}/data/`)
    .then(response => {
      dispatch(gotAverageAll(response.body))
    })
    .catch(console.error)
}

// get the list of active classes
export const getClasses = () => (dispatch, getState) => {
  request(`${baseUrl}/classes`)
  .then(response => {
    dispatch(getClassesSuccess(response.body))
    
  })
  .catch(console.error)
}

export const getClassesSuccess = activeClasses => ({
  type: ACTIVE_CLASSES_FETCHED,
  activeClasses
})