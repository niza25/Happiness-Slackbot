import React from 'react'
import { connect } from 'react-redux'
import {getAverageAll} from '../../actions/data'
import ButtonDisplay from './ButtonDisplay'
import './header.css'

class ButtonMoodContainer extends React.Component {

  componentDidMount() {
    this.props.getAverageAll()
  }

  render() {
    this.props.averageAll && console.log(this.props.averageAll.EnergyAll[0].avg, 'ave all')
    return (
      <div className='buttonsContainer spaceAround'>
        <h5>All Classes Today:</h5>
        <div className='buttonsContainer'>
        {
          this.props.averageAll &&
          <div>
          <ButtonDisplay topic='Energy' stats={Number(this.props.averageAll.EnergyAll[0].avg).toFixed(1)} />
          <ButtonDisplay topic='Engagement' stats={Number(this.props.averageAll.EngagementAll[0].avg).toFixed(1)} />
          <ButtonDisplay topic='Happinness' stats={Number(this.props.averageAll.HappinessAll[0].avg).toFixed(1)} />
          </div>
        }
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  averageAll: state.averageAll
})

export default connect(mapStateToProps, {getAverageAll})(ButtonMoodContainer)