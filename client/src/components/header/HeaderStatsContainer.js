import React from 'react'
import { connect } from 'react-redux'
import './header.css'
import Button from 'react-bootstrap/Button'

class HeaderStatsContainer extends React.Component {

  componentDidMount() {
// fetch data to display in button
// if reusult low - setState(variant-warning), or danger
  }

  state={
    variant:"success"
  }

  render() {

    return (
          <div className='statsButtonContainer'>
          <Button variant={this.state.variant}>4.5</Button>
          <h5>{this.props.topic}</h5>
          </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(HeaderStatsContainer)