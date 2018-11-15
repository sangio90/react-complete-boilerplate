import React, { Component } from 'react'
import { connect } from 'react-redux';
import { doLogin, doLogout } from '../actions/index'

class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.logout = this.logout.bind(this)

    this.state = {
      username: '',
      password: ''
    }
  }

  onSubmit(event) {
    event.preventDefault()
    //Dispatch Login Saga
    this.props.doLogin(this.state.username, this.state.password)
    //Dopo aver lanciato la login svuoto la form
    this.setState({username: '', password: ''})
  }

  handleChange(event) {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  renderLoginError() {
    let loginError = '';
    if (this.props.auth.loginError) {
      loginError = (<span>{this.props.auth.loginError}</span>);
    }
    return loginError;
  }

  logout() {
    this.props.doLogout()
  }

  render() {
    if (this.props.auth.isAuthenticated === true) {
      return (
        <span>
          Welcome { this.props.auth.username } 
          <button onClick={this.logout} >Logout</button>
        </span>
        )
    }

    if (this.props.auth.isLoggingIn === true) {
      return (<span>...Loading</span>)
    }

    const wrapperStyle = {
      display: 'flex',
      justifyContent: 'space-between'
    }

    return (
    <div style={wrapperStyle}>
      <div>
        You are not logged in yet, please login to continue using the application
      </div>
      <div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="username"/>
          <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="password"/>
          <input type="submit" value="login"/> 
          <span>{this.renderLoginError()}</span>
        </form>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { doLogin, doLogout })(LoginForm)