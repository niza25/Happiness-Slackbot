import React, { Component } from 'react';
import { connect } from 'react-redux'
//import PropTypes from 'prop-types';
import './dashboard.css'
import HeaderContainer from './header/HeaderContainer'
import EnergyChart from './EnergyChart'
import EngagementChart from './EnergyChart'
import HappinnessChart from './EnergyChart'
import Container from 'react-bootstrap/Container'

class DashboardMain extends Component {


    render() {

        return (
            <Container className='main'>
                <HeaderContainer />
                <Container className='chartsContainer'>
                    <EnergyChart />
                    <EngagementChart />
                    <HappinnessChart />
                </Container>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
  })

export default connect(mapStateToProps)(DashboardMain);
