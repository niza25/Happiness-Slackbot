import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/users/Login'
import Logout from './components/users/Logaut'
import Signup from './components/users/SignUp'
import DashboardMain from './components/DashboardMain'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Navbar bg="light" variant='light' expand="lg" className='mainNavbar' /* fixed="top" */ >
            <Navbar.Brand href="/dashboard">Slackbot Happiness Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              {this.props.currentUser === null &&
                <Nav className="mr-auto">
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
              }

              {this.props.currentUser !== null &&
                <Nav className="mr-auto">
                  <Nav.Link href="#">You are logged in</Nav.Link>
                  <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
              }

            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={DashboardMain} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={Signup} />
        
          <footer className="footer">
          Made with &#10084; for Codaisseur by Emine, Denise, Izabela and Robert &copy; 2019
          </footer>
        </div>

      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(App)

