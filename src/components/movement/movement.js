import React from 'react'
import { OUTCOME } from '../../constants/index'

export default ({id, type, description, price}) => {
  let style = {}
  let isOutcome = type == OUTCOME;

  style.color = isOutcome ? 'darkred' : 'black';

  return (
    <div>
      <h1 style={style}>
        {description}
      </h1>
      <p>
          {isOutcome ? '-' : ''} {price}
      </p>
    </div>
  )
}