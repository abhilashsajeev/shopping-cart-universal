import React, { PropTypes } from 'react';
import Product from './Product';
import { Button, Row, Col } from 'react-bootstrap';

function getRandomNumber() {
  return Math.ceil(Math.random() * 10);

}
var row = {
  border: '1px solid',
  margin : 'auto'  ,
  
}

const ProductItem = ({ product, onAddToCartClicked }) => (
  <Col lg={3} md={4} xs={12} sm={6} style={row}>
    <img src={"http://lorempixel.com/200/200/business/" + getRandomNumber()} alt="product.title" />
    <Product
      title={product.title}
      price={product.price} />
    <Button
      bsStyle='success'
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </Button>
  </Col>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem