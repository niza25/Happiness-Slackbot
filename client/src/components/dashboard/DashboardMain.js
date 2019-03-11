import React, { Component } from 'react';
import { connect } from 'react-redux'
//import PropTypes from 'prop-types';
import './dashboard.css'
import { getClasses } from '../../actions/data'
import HeaderContainer from '../header/HeaderContainer'
import ChartDisplayContainer from './ChartDisplayContainer'
import ChartDisplay from './ChartDisplay'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DashboardMain extends Component {



    render() {
        const props  = this.props.activeClass
        console.log(props)
        if( this.props.activeClass != undefined) return 'Loading...'
        
        
        return (
            <div>
            <p>oi</p>
            
        </div>)
    }
}

const mapStateToProps = state => ( console.log('oi',state.activeClasses),{
    currentUser: state.currentUser,
    activeClasses: state.activeClasses
})

export default connect(mapStateToProps, { getClasses })(DashboardMain);



{/* <Container className='main'>

<HeaderContainer />

<Tabs defaultActiveKey="class23">
    {map over the fetched list of classes to display tabs}

    {   console.log(this.props.activeClass),
        this.props.activeClasses.map(activeClass => {
            console.log(activeClass, 'class')
        })

    }
    {<Tab eventKey="class23" title="#class23">
        <ChartDisplayContainer />
    </Tab>
    <Tab eventKey="class24" title="#class24">
        <ChartDisplay />
    </Tab>
    <Tab eventKey="class25" title="#class25">
        <ChartDisplay />
    </Tab>}
</Tabs>

</Container> */}
