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
  <Layout cartLength={products.length}>
    <div>
      <Cart
        products={products}
        total={total}
        />
      <br />
      <button onClick={() => checkout(products, 'asdfasdf')}
        disabled={products.length ? '' : 'disabled'}>
        Checkout
      </button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: (products, userId)=>{
      dispatch(checkout(products, userId))
    }
  }
};

export default connectWithStore(store, CartContainer, mapStateToProps, mapDispatchToProps);