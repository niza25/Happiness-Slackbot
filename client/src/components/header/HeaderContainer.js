import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import HeaderStatsContainer from './HeaderStatsContainer'

class HeaderContainer extends React.Component {

  /*   componentDidMount() {
  
    } */

  render() {

    return (
      <Container>
        <div>
          <h1>The Student's Happiness Project</h1>
          <h2>Slackbot Dashboard</h2>
        </div>
        <div className='headerStatsContainer'>
          <HeaderStatsContainer topic='energy' />
          <HeaderStatsContainer topic='engagement' />
          <HeaderStatsContainer topic='happinness' />
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(HeaderContainer)