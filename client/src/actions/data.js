import request from 'superagent'

export const ACTIVE_CLASSES_FETCHED = 'ACTIVE_CLASSES_FETCHED'

const baseUrl = 'http://localhost:4000'


// fetch active classes
const activeClassesfetched = activeClasses => ({
  type: ACTIVE_CLASSES_FETCHED,
  activeClasses
})

export const fetchActiveClasses = () => (dispatch, getState) => {
  
  request(`${baseUrl}/classes`)
    .then(response => {
      dispatch(activeClassesfetched(response.body))
    })
    .catch(console.error)
}