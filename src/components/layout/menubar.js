import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';

class MenuBar extends Component {
  render() {
    return (<ul>
      <li><Link to ='/'>List</Link></li>
      <li><Link to ='/form'>Add</Link></li>
    </ul>)
  }
}

export default withRouter(connect()(MenuBar))
