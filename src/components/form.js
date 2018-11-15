import React, { Component } from 'react'
import { connect } from 'react-redux';
import { asyncAddMovement, redirectToList } from '../actions/index'

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      description: '',
      price: 0
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.asyncAddMovement(this.state, this.props.history)
    this.setState({description: '', price: 0})
  }

  handleChange(event) {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  render() {
    return (<form onSubmit={this.onSubmit}>
      <input type="text" value={this.state.description} name="description" onChange={this.handleChange} placeholder="description"/>
      <br/>
      <input type="text" value={this.state.price} name="price" onChange={this.handleChange} placeholder="price"/>
      <br/>
      <button type="submit">Submit</button>
    </form>)
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovement: state.movements.active
  }
}

export default connect(
  mapStateToProps,
  { asyncAddMovement, redirectToList }
)(Form)
