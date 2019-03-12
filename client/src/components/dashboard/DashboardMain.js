import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './dashboard.css'
import { fetchActiveClasses, getDataForClass } from '../../actions/data'
import HeaderContainer from '../header/HeaderContainer'
import ChartDisplayContainer from './ChartDisplayContainer'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DashboardMain extends Component {

    componentDidMount() {
        this.props.activeClasses === null && this.props.fetchActiveClasses()
    }

    handleSelect = (key) => {
        this.props.getDataForClass(key)
    }


    render() {

        if (!this.props.authenticated) return (
            <Redirect to="/login" />
        )


        return (
            <Container className='main'>

                <HeaderContainer />

                <Tabs defaultActiveKey={1} onSelect={key=> this.handleSelect(key)}>

                    {!this.props.activeClasses && 'Almost there...'}

                    {this.props.activeClasses &&
                        this.props.activeClasses.map(activeClass => {
                            return (
                                <Tab eventKey={activeClass.id}
                                title={activeClass.name}
                                key={activeClass.id}>
                                </Tab>
                            )
                        })
                    }
                </Tabs>
                
                <ChartDisplayContainer />
            
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    activeClasses: state.activeClasses && state.activeClasses.classes,
    dataForClass: state.dataForClass
})

export default connect(mapStateToProps, { fetchActiveClasses, getDataForClass })(DashboardMain);
