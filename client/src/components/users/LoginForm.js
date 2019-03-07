import React, { PureComponent } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


export default class LoginForm extends PureComponent {
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
    return (<Container>
      <h1>Login</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={
            this.state.email || ''
          } onChange={this.handleChange} required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={
            this.state.password || ''
          } onChange={this.handleChange} required />
        </Form.Group>
        <Button variant="dark" type="submit">
          Login
      </Button>
      </Form>
    </Container>
    )
  }
}