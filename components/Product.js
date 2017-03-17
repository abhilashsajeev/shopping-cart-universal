import React, { PropTypes } from 'react'

const Product = ({ price, quantity, title, author }) => (
  <div>
    <span><b>{title}</b> </span>
    <div>
    cost - &#36;{price}{quantity ? ` x ${quantity}` : null}
    <p>
      Written by {author}
    </p>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
