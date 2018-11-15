import { ADD_MOVEMENT, INCOME, OUTCOME } from '../constants/index'

const initialState = {
  all: [
    {
      type: INCOME,
      description: 'desc',
      price: 18.4
    },
    {
      type: OUTCOME,
      description: 'test',
      price: 23
    }
  ]
}
const movements = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MOVEMENT: 
      let newState = {...state, all: state.all.concat(action.payload)}
      return newState
    default:
      return state
  }
}

export default movements