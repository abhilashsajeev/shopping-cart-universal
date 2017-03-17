import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../redux/actions'
import { getInventoryDefaults } from '../redux/reducers'

import { connectWithStore } from '../redux/connectWithStore';
import { store } from '../redux/store'
import shop from '../lib/shop'
import * as types from '../redux/constants/ActionTypes'
import Layout from '../components/layout';


const AdminContainer = ({ product }) => (
  <Layout>
    <div>
      
      <button onClick={() => addProduct(products, 'asdfasdf')}
        disabled={products.length ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  </Layout>

)

AdminContainer.propTypes = {
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
  product: getInventoryDefaults(state),
  
})

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (products, userId)=>{
      dispatch(addProduct(products))
    }
  }
};

export default connectWithStore(store, AdminContainer, mapStateToProps, mapDispatchToProps);