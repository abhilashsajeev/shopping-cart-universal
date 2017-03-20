import {
  ADD_PRODUCT_TO_INVENTORY,
  UPDATE_INVO_DATA
} from '../constants/ActionTypes'

const initialState = {
  id: `${Math.random() * Math.pow(10, 10)}`,
  author: '',
  title: '',
  price: 0,
  inventory: 0,
  image: ''
}

const inventory = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_INVENTORY:
      return initialState;
    case UPDATE_INVO_DATA:

      var a = {
        ...state,
        [action.field]: action.value
      }
      return a;
    default:
      return getInventoryDefaults(state)
  }
}

export const getInventoryDefaults = (state) => {
  return state.inventory ? state.inventory : initialState;
};
export default inventory;