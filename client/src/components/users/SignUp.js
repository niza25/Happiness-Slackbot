import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/users'
import SignupForm from './SignupForm'
import { Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap';


class Signup extends PureComponent {
	handleSubmit = (data) => {
		this.props.postSignup(data.name, data.email, data.password)
	}

	render() {
		if (this.props.signup.success) return (
			<Redirect to="/events" />
		)

		return (
			<Container>
				<SignupForm onSubmit={this.handleSubmit} />
				<p style={{ color: 'red' }}>{this.props.signup.error}</p>
			</Container>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, { postSignup: signup })(Signup)