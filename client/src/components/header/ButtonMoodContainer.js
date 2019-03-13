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
            <ButtonDisplay topic='Energy' stats={this.props.averageAll.EnergyAll} />
            <ButtonDisplay topic='Engagement' stats={this.props.averageAll.EngagementAll} />
            <ButtonDisplay topic='Happinness' stats={this.props.averageAll.HappinessAll} />
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

