import React, { Component } from 'react';
import { connect } from 'react-redux'
import './dashboard.css'
import { getClasses } from '../../actions/data'
import DashboardMain from './DashboardMain';

class DashboardMainContainer extends Component {

    componentDidMount() {
        this.props.getClasses()
    }


    render() {
        
        if( !this.props.activeClass) return 'Loading...'
      
        return (
          <DashboardMain activeClasses= {this.props.activeClasses && this.props.activeClasses.classes} />
            )
    }
}

const mapStateToProps = state => ( console.log('oi',state.activeClasses),{
    currentUser: state.currentUser,
    activeClasses: state.activeClasses
})

export default connect(mapStateToProps, { getClasses })(DashboardMainContainer);

