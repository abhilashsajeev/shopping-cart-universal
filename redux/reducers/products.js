import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, ADD_PRODUCT_TO_INVENTORY } from '../constants/ActionTypes'

const products = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }

    default:
      return state
  }
}

const byId = (state = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    case ADD_PRODUCT_TO_INVENTORY:
      const {product} = action;
      
      return{
        ...state,
        [product.productId]: product
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]


export const getVisibleProducts = (state) => {
  console.log('the state is', state);
  return state.visibleIds.map(id => getProduct(state, id))
}

