import React, { PropTypes } from 'react'
import Product from './Product'

const Cart = ({ products, total }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        author={product.author}
        key={product.id}
      />
    )
  ) : (
      <em>Please add some products to cart.</em>
    )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
