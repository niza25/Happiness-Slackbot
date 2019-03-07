import request from 'superagent'

export const AVERAGE_ALL_FETCHED = 'AVERAGE_FETCHED'

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