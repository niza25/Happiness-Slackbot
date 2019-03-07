import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/users'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

class Login extends PureComponent {
  
  handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
    
    if (this.props.currentUser !== null) return (
			<Redirect to="/dashboard" />
		)

		return (
			<Container>
				<LoginForm onSubmit={this.handleSubmit} />
				{this.props.error &&
					<span style={{ color: 'red' }}>{this.props.error}</span>}
			</Container>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
		error: state.login.error
	}
}

export default connect(mapStateToProps, { login })(Login)
