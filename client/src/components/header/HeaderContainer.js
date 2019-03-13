import React from 'react'
import { connect } from 'react-redux'
import './header.css'
import ButtonMoodContainer from './ButtonMoodContainer'


class HeaderContainer extends React.Component {


  render() {

    return (
      <div className='headerContainer'>
        <div>
          <h2>The Student Happiness Project</h2>
        </div>

        <ButtonMoodContainer />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  averageAll: state.averageAll
})

export default connect(mapStateToProps)(HeaderContainer)