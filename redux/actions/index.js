import shop from '../../lib/shop'
import * as types from '../constants/ActionTypes'

const addProductToInventory = product => ({
  type: types.ADD_PRODUCT_TO_INVENTORY,
  product
})

export const addProduct = (product) => dispatch => {
  console.log('product to the add', product)
  dispatch(addProductToInventory(product))
}

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

const updateInvoDataUnsafe = (field, value) => ({
  type: types.UPDATE_INVO_DATA,
  field,
  value
})

export const updateInvodata = (field, name) => dispatch => {
  dispatch(updateInvoDataUnsafe(field, name))
}

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = (products, userId) => (dispatch, getState) => {
  
  const { cart } = getState()
  console.log('calling get state');
  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      order: {cart, userId}
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}