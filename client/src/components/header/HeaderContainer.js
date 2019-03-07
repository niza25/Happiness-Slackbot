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
        <div className='titleContainer'>
          <h2>The Student's Happiness Project</h2>
          <h3>Slackbot Survey Dashboard</h3>
        </div>
        <div>
          <h5 style={{textAlign: 'center'}}>General mood:</h5>
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