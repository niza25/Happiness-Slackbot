import React from 'react'
import { connect } from 'react-redux'
//import {getAverage} from '../../actions/data'
import './header.css'
import Container from 'react-bootstrap/Container'
import ButtonMoodContainer from './ButtonMoodContainer'


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

        <ButtonMoodContainer />

      </Container>
    )
  }
}

const mapStateToProps = state => ({
  averageAll: state.averageAll
})

export default connect(mapStateToProps)(HeaderContainer)