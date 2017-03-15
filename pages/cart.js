import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout } from '../redux/actions'
import { getTotal, getCartProducts } from '../redux/reducers'
import Cart from '../components/cart'
import { connectWithStore } from '../redux/connectWithStore';
import { store } from '../redux/store'
import shop from '../lib/shop'
import * as types from '../redux/constants/ActionTypes'
import Layout from '../components/layout';


const CartContainer = ({ products, total, checkout }) => (
  <Layout>
    <div>
      <Cart
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)} />
      <br />
    </div>
  </Layout>

)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  checkout: checkout(state)
})

const mapDispatchToProps = (dispatch, getState) => {
  return {
    onCheckoutClick: (productId, getState) => {
      dispatch({
        type: types.CHECKOUT_REQUEST
      })
      shop.buyProducts(products, () => {
        dispatch({
          type: types.CHECKOUT_SUCCESS,
          cart
        })
        // Replace the line above with line below to rollback on failure:
        
      })

    }
  }
};

export default connectWithStore(store, CartContainer, mapStateToProps, mapDispatchToProps);