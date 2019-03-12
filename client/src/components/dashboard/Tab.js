import React from 'react'
import { connect } from 'react-redux'
import { getDataForClass } from '../../actions/data'
import './dashboard.css'
import Container from 'react-bootstrap/Container'
import ChartDisplay from './ChartDisplay'
import ParticipationDisplay from './ParticipationDisplay'
import Dropdown from 'react-bootstrap/Dropdown'

class Tab extends React.Component {

  componentDidMount() {
    //this.props.classId !== null && this.props.getDataForClass(this.props.classId)
  }

  render() {


    return (
      <Container>
        <div className='aboveChart'>

          <Dropdown>
            <Dropdown.Toggle variant="light">
              Current week
          </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">from week-1</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <ParticipationDisplay percentage='87' />
        </div>

        <ChartDisplay data={this.props.dataForClass[0]} />

      </Container>
    )
  }
}

const mapStateToProps = state => ({
  dataForClass: state.dataForClass
})

export default connect(mapStateToProps, { getDataForClass })(Tab)