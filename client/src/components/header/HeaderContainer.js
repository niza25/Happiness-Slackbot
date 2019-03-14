import React from 'react'
import { connect } from 'react-redux'
import './header.css'
import ButtonMoodContainer from './ButtonMoodContainer'


class HeaderContainer extends React.Component {


  render() {

    return (
      <div className='headerContainer'>
        <div>
          <h3>The Student Happiness Project</h3>
        </div>
          <img className='coco' src='/coco.png'alt='coco'/>
        <ButtonMoodContainer />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  averageAll: state.averageAll
})

export default connect(mapStateToProps)(HeaderContainer)