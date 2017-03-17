import {
  ADD_PRODUCT_TO_INVENTORY
} from '../constants/ActionTypes'

const initialState = {
  author: '',
  title: '',
  inventory: 0,
  image: ''
}

const inventory = (state=initialState, action) => {
  switch(action.type){
    case ADD_PRODUCT_TO_INVENTORY:
      return initialState
    default:  
      return state
  }
}

export const getInventoryDefaults = ()=> initialState
export default cart;