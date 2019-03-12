import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDataForClass } from '../../actions/data'
import './dashboard.css'
import { fetchActiveClasses } from '../../actions/data'
import HeaderContainer from '../header/HeaderContainer'
import Tab from './Tab'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'


class DashboardMain extends Component {

    componentDidMount() {
        this.props.activeClasses === null && this.props.fetchActiveClasses()
    }

    changeClass = (classId) => {
        this.props.getDataForClass(classId)
    }


    render() {

        if (!this.props.authenticated) return (
            <Redirect to="/login" />
        )

        return (
            <Container className='main'>

                <HeaderContainer />

                <Tabs>

                    {!this.props.activeClasses && 'Almost there...'}

                    {this.props.activeClasses &&
                        this.props.activeClasses.map(activeClass => {
                            return (
                                <Tab onClick={this.changeClass(activeClass.id)}
                                    eventKey={activeClass.name}
                                    title={activeClass.name}
                                    id={activeClass.id}>
                                </Tab>
                            )
                        })
                    }

                </Tabs>

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
