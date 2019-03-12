import request from 'superagent'

export const ACTIVE_CLASSES_FETCHED = 'ACTIVE_CLASSES_FETCHED'
export const AVERAGE_ALL_FETCHED = 'AVERAGE_ALL_FETCHED'
export const DATA_FOR_CLASS_FETCHED = 'DATA_FOR_CLASS_FETCHED'

const baseUrl = 'http://localhost:4000'


// fetch active classes to display on tabs
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

// fetch the average 
const averageAllfetched = averageAll => ({
  type: AVERAGE_ALL_FETCHED,
  averageAll
})

export const getAverageAll = () => (dispatch) => {
  
  request(`${baseUrl}/average`)
    .then(response => {
      dispatch(averageAllfetched(response.body))
    })
    .catch(console.error)
}

// fetch the data per class
const dataForClassfetched = data => ({
  type: DATA_FOR_CLASS_FETCHED,
  data
})

export const getDataForClass = (classId) => (dispatch) => {
  
  request(`${baseUrl}/classes/${classId}`)
    .then(response => {
      dispatch(dataForClassfetched(response.body))
      console.log(response.body, classId +'res body')
    })
    .catch(console.error)
}