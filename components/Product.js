import React, { PropTypes } from 'react'

const Product = ({ price, quantity, title }) => (
  <div>
    <span><b>{title}</b> </span>
    <div>
    - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
