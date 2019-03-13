import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/users'
import { Redirect } from 'react-router-dom'

class Logout extends PureComponent {
	
	componentWillMount() {
		this.props.logout()
	}

	render() {
		if (this.props.currentUser === null) return (
			<Redirect to="/dashboard" />
		)

		return (
			<Redirect to="/login" />
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser
})

export default connect(mapStateToProps, { logout })(Logout)
