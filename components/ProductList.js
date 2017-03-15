import React, { PropTypes } from 'react';
import {Grid} from 'react-bootstrap';




const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <Grid>{children}</Grid>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList