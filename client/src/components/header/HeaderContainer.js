import React from 'react'
import { connect } from 'react-redux'
import './header.css'
import Container from 'react-bootstrap/Container'
import HeaderStatsContainer from './HeaderStatsContainer'

class HeaderContainer extends React.Component {

  /*   componentDidMount() {
  
    } */

  render() {

    return (
      <Container className='headerContainer'>
        <div>
          <h1>The Student's Happiness Project</h1>
          <h2>Slackbot Survey Dashboard</h2>
        </div>
        <div>
          <h4>General mood:</h4>
        <div className='headerStatsContainer'>
          <HeaderStatsContainer topic='Energy' />
          <HeaderStatsContainer topic='Engagement' />
          <HeaderStatsContainer topic='Happinness' />
        </div>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(HeaderContainer)