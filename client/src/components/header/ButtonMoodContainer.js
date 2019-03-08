import React from 'react'
import { connect } from 'react-redux'
//import {getAverage} from '../../actions/data'
import ButtonDisplay from './ButtonDisplay'
import './header.css'

class ButtonMoodContainer extends React.Component {

  /*   componentDidMount() {
  // this.props.getAverageAll()
    } */

  render() {

    return (
      <div className='spaceAround'>
        <h5>Current mood of all active classes:</h5>
        <div className='buttonsContainer'>
          <ButtonDisplay topic='Energy' stats='4.5' />
          <ButtonDisplay topic='Engagement' stats='4.5' />
          <ButtonDisplay topic='Happinness' stats='4.5' />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  averageAll: state.averageAll
})

export default connect(mapStateToProps)(ButtonMoodContainer)