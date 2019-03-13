import React from 'react'
import { connect } from 'react-redux'
import { getAverageAll } from '../../actions/data'
import ButtonDisplay from './ButtonDisplay'
import './header.css'

class ButtonMoodContainer extends React.Component {

  componentDidMount() {
    this.props.getAverageAll()
  }

  render() {

    return (

      <div className='buttonsContainer spaceAround'>
        <h5>All Classes Today:</h5>
        {this.props.averageAll &&
          <div className='buttonsContainer'>
            <ButtonDisplay topic='Energy' stats={Number(this.props.averageAll.EnergyAll[0].avg).toFixed(1)} />
            <ButtonDisplay topic='Engagement' stats={Number(this.props.averageAll.EngagementAll[0].avg).toFixed(1)} />
            <ButtonDisplay topic='Happinness' stats={Number(this.props.averageAll.HappinessAll[0].avg).toFixed(1)} />
          </div>
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  averageAll: state.averageAll
})

export default connect(mapStateToProps, { getAverageAll })(ButtonMoodContainer)

