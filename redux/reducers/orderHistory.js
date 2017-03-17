import {
  CHECKOUT_SUCCESS
} from '../constants/ActionTypes'

let initialState = {
  
}

const orderHistory = (state=initialState, action) => {
  console.log(action);
  switch(action.type){
    case CHECKOUT_SUCCESS:
      return addOrder(state, action.order);
      break;
    default:
      return state
  }
}

const addOrder = (state={}, action)=>{
  const {userId, cart} = action;
  console.log('calling state from addorder', action);
  console.log(state);
  if(state[userId]){
    return {
      ...state,
      [userId]: {
        ...state[userId],
        ...cart.quantityById}
    }
  } else 
  return {
    ...state,
    [userId]: cart.quantityById
  }
}

export default orderHistory;