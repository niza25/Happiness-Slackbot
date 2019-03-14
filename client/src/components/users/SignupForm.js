import React, { PureComponent } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../../App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class SignupForm extends PureComponent {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <Container className='loginForm fullPage'>
        <Jumbotron>
          <h1>Sign up</h1>
          <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Email
                </Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={
                  this.state.email || ''
                } onChange={this.handleChange} required />
              
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                Password
                </Form.Label>
  					<Form.Control type="password" placeholder="Enter password" name="password" value={
                  this.state.password || ''
                } onChange={this.handleChange} required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                Confirm password
                </Form.Label>
  					<Form.Control type="password" placeholder="Confirm password" name="confirmPassword" value={
                  this.state.confirmPassword || ''
                } onChange={this.handleChange} required />
              
            </Form.Group>

            {
              this.state.password &&
              this.state.confirmPassword &&
              this.state.password !== this.state.confirmPassword &&
              <p style={{ color: 'red' }}>The passwords do not match!</p>
            }


            <Button variant="dark" type="submit">Sign up</Button>

          </Form>
        </Jumbotron>
      </Container>
    )
  }
}

