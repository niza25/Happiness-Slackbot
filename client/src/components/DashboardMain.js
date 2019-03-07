import React, { Component } from 'react';
import { connect } from 'react-redux'
//import PropTypes from 'prop-types';
import './dashboard.css'
import HeaderContainer from './header/HeaderContainer'
import EnergyChart from './EnergyChart'
import EngagementChart from './EngagementChart'
import HappinessChart from './HappinessChart'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DashboardMain extends Component {


    render() {

        return (
            <Container className='main'>
                
                <HeaderContainer />
                
                <Tabs defaultActiveKey="class23" id="uncontrolled-tab-example">
                    <Tab eventKey="class23" title="#class23">
                        <EnergyChart />
                    </Tab>
                    <Tab eventKey="class24" title="#class24">
                        <EngagementChart />
                    </Tab>
                    <Tab eventKey="class25" title="#class25">
                        <HappinessChart />
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
})

export default connect(mapStateToProps)(DashboardMain);
