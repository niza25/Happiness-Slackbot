import { DATA_FOR_CLASS_FETCHED } from '../actions/data'

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case DATA_FOR_CLASS_FETCHED:

      const payload = action.data;
      console.log(payload, 'what comes')

      //mapping over the array of days inside one mood
      let energyData = payload.Energy.map(date => {

        return { name: date.response_time, Energy: Number(date.avg).toFixed(1) }
      })

      let engagementData = payload.Engagement.map(date => {

        return { name: date.response_time, Engagement: Number(date.avg).toFixed(1) }
      })

      let happinessData = payload.Happiness.map(date => {

        return { name: date.response_time, Happiness: Number(date.avg).toFixed(1) }
      })

      return [energyData, engagementData, happinessData];
    default:
      return state
  }
}