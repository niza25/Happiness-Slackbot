import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

class HeaderStatsContainer extends React.Component {

  componentDidMount() {
// fethc data to display in button
// if reusult low - setState(variant-warning), or danger
  }

  state={
    variant:'outline-success'
  }

  render() {

    return (
          <div className='statsButtonContainer'>
          <Button variant={this.state.variant}>4.5</Button>
          <h3>{this.props.topic}</h3>
          </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(HeaderStatsContainer)