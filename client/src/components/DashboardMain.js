import React, { Component } from 'react';
import { connect } from 'react-redux'
//import PropTypes from 'prop-types';
import HeaderContainer from './header/HeaderContainer'
import EnergyChart from './EnergyChart'
import EngagementChart from './EnergyChart'
import HappinnessChart from './EnergyChart'
import Container from 'react-bootstrap/Container'

class DashboardMain extends Component {


    render() {

        return (
            <div>
                <HeaderContainer />
                <Container>
                    <EnergyChart />
                    <EngagementChart />
                    <HappinnessChart />
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
  })

export default connect(mapStateToProps)(DashboardMain);
