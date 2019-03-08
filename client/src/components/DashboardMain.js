import React, { Component } from 'react';
import { connect } from 'react-redux'
//import PropTypes from 'prop-types';
import './dashboard.css'
import HeaderContainer from './header/HeaderContainer'
import ChartDisplay from './ChartDisplay'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DashboardMain extends Component {


    render() {

        return (
            <Container className='main'>

                <HeaderContainer />

                <Tabs defaultActiveKey="class23">
                    <Tab eventKey="class23" title="#class23">
                        <ChartDisplay />
                    </Tab>
                    <Tab eventKey="class24" title="#class24">
                        <ChartDisplay />
                    </Tab>
                    <Tab eventKey="class25" title="#class25">
                        <ChartDisplay />
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
