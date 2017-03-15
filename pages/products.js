import React, { PropTypes } from 'react'
import { connectWithStore } from '../redux/connectWithStore';
import { store } from '../redux/store'
import Layout from '../components/layout';
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductList'
import { getVisibleProducts } from '../redux/reducers/products'
import { addToCart } from '../redux/actions'
import { getCartProducts } from '../redux/reducers'


class ProductListContainer extends React.Component {

  renderProudctList(products, addToCart) {
    return (
      <ProductsList title="Products">
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)} />
        )}
      </ProductsList>
    )
  }

  render() {
    const products = this.props.products;
    const onAddToCart = this.props.onAddToCart;
    const cartLength = this.props.cartLength
    return (
      <Layout>
        cart length = {cartLength}
        <div>
          {this.renderProudctList(products, onAddToCart)}
          <br />
        </div>
      </Layout>
    )
  }

}

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  cartLength: getCartProducts(state).length
})

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (productId) => {
      dispatch(addToCart(productId))
    }
  }
};

export default connectWithStore(store, ProductListContainer, mapStateToProps, mapDispatchToProps);