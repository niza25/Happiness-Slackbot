import React from 'react'
import { connect } from 'react-redux'
//import {getAverage} from '../../actions/data'
import './header.css'
import Container from 'react-bootstrap/Container'
import ButtonDisplay from './ButtonDisplay'

class HeaderContainer extends React.Component {

  /*   componentDidMount() {
  // this.props.getAverageAll()
    } */

  render() {

    return (
      <Container className='headerContainer'>
        
        <div>
          <h2>The Student's Happiness Project</h2>
          <h3>Slackbot Survey Dashboard</h3>
        </div>
        
        <div className='spaceAround'>
          <h5>Current mood of all active classes:</h5>
          <div className='buttonsContainer'>
            <ButtonDisplay topic='Energy' stats='4.5'/>
            <ButtonDisplay topic='Engagement' stats='4.5'/>
            <ButtonDisplay topic='Happinness' stats='4.5'/>
          </div>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  averageAll: state.averageAll
})

export default connect(mapStateToProps)(HeaderContainer)