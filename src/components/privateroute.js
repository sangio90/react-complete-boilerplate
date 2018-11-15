import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

/**
 * This component expects an auth prop and verifies the isAuthenticated attribute, if true renders the expected component (which should be passed as parameter)
 * otherwise redirects to homepage
 */

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(PrivateRoute)