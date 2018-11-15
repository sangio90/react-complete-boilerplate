import React from 'react'
import { connect } from 'react-redux'
import Movement from './movement'

const mapStateToProps = state => {
  return { movements: state.movements };
};

const MovementList = (props) => {
  {
    let i = 1;
    return (
      <ul>
        {props.movements.all.map((movement) => {
          return <Movement {...movement} key={i++} />
        })}
      </ul>
    )
  }
}

export default connect(mapStateToProps)(MovementList);