import React from 'react'
import { connect } from 'react-redux'
import './dashboard.css'
import Container from 'react-bootstrap/Container'
import ChartDisplay from './ChartDisplay'
import ParticipationDisplay from './ParticipationDisplay'
import Dropdown from 'react-bootstrap/Dropdown'

class ChartDisplayContainer extends React.Component {

  /*   componentDidMount() {
  // 
    } */

  render() {

    return (
      <Container>
        <div className='aboveChart'>
        <Dropdown>
          <Dropdown.Toggle variant="light">
            Change timeline
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">from week-1</Dropdown.Item>
            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>

        <ParticipationDisplay percentage='87' />
        </div>
        <ChartDisplay />

      </Container>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(ChartDisplayContainer)