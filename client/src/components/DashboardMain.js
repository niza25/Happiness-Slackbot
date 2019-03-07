import React, { Component } from 'react';
import { connect } from 'react-redux'
//import PropTypes from 'prop-types';
import './dashboard.css'
import HeaderContainer from './header/HeaderContainer'
import EnergyChart from './EnergyChart'
import EngagementChart from './EngagementChart'
import HappinessChart from './HappinessChart'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'

class DashboardMain extends Component {


    render() {

        return (
            <Container className='main'>
                <HeaderContainer />
                <Container className='chartsContainer'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Change class
                            </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">#class23</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">#class24</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">#class25</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    <EnergyChart />
                    <EngagementChart />
                    <HappinessChart />
                </Container>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
})

export default connect(mapStateToProps)(DashboardMain);
