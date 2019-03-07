import React, {Component} from 'react';
//import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import EnergyChart from './EnergyChart'

class DashboardMain extends Component{


    render() {

        return (
            <div>
                <EnergyChart />
            </div>
        )
    }
}

/* const mapStateToProps = state => ({
    currentUser: state.currentUser,
  }) */

export default /* ;connect(mapStateToProps) */(DashboardMain);
