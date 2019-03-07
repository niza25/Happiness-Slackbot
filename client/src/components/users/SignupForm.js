import React, { PureComponent } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
      <Container>
        <h1>Sign up</h1>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>
            Name
            <Form.Control type="name" name="name" value={
              this.state.name || ''
            } onChange={this.handleChange} required/>
          </Form.Label>
          </Form.Group>

          <Form.Group>
          <Form.Label>
            Email
            <Form.Control type="email" name="email" value={
              this.state.email || ''
            } onChange={this.handleChange} required/>
          </Form.Label>
          </Form.Group>
          
          <Form.Group>
          <Form.Label>
            Password
  					<Form.Control type="password" name="password" value={
              this.state.password || ''
            } onChange={this.handleChange} required/>
          </Form.Label>
          </Form.Group>
            
          <Form.Group>
          <Form.Label>
            Confirm password
  					<Form.Control type="password" name="confirmPassword" value={
              this.state.confirmPassword || ''
            } onChange={this.handleChange} required/>
          </Form.Label>
          </Form.Group>

          {
            this.state.password &&
            this.state.confirmPassword &&
            this.state.password !== this.state.confirmPassword &&
            <p style={{ color: 'red' }}>The passwords do not match!</p>
          }


          <Button variant="dark" type="submit">Sign up</Button>

        </Form>
      </Container>
    )
  }
}

