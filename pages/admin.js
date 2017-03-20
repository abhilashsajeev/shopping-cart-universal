import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addProduct, updateInvodata } from '../redux/actions'
import { getDefaultBookValue } from '../redux/reducers'

import { connectWithStore } from '../redux/connectWithStore';
import { store } from '../redux/store'
import shop from '../lib/shop'
import * as types from '../redux/constants/ActionTypes'
import Layout from '../components/layout';
import { Input, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class FieldGroup extends React.Component {
  
  constructor(props){
    super(props);
    this.updateField = this.updateField.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  updateField(name, value){
    this.props.updateProduct(name, value)
  }
  
  onChange(e){
    
    var value = e.target.value;
    value = this.props.type === "number" ? parseInt(value): value;
    var name = this.props.name;
    console.log('--------->>>>>>>>> name', name);
    console.log('--------->>>>>>>>> value', value);
    this.updateField(name, value);
  }
  render() {
    var {name, type} = this.props;
    return (
      <FormControl type={type} placeholder={name}
        onChange={this.onChange} />
    );
  }


}

class AdminContainer extends React.Component {
  render() {
    var product = this.props.product;
    var updateProduct = this.props.updateProduct;
    var {addProduct} = this.props;
    return (
      <Layout title="Admin page">
        <div>
          <form>
            <FieldGroup type="text" name="title"
              updateProduct={updateProduct} />
            <FieldGroup type="text" name="author" updateProduct={updateProduct}/>
            <FieldGroup type="number" name="price" updateProduct={updateProduct} />
            <FieldGroup type="number" name="inventory" updateProduct={updateProduct}/>
            <FieldGroup type="text" name="image" updateProduct={updateProduct}/>
          </form>
          <button onClick={() => addProduct(product)}>
            Add Product
      </button>
        </div>
      </Layout>

    )
  }
}

AdminContainer.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
}

const mapStateToProps = (state) => ({
  product: getDefaultBookValue(state),

})

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (products) => {
      dispatch(addProduct(products))
    },
    updateProduct: (field, name) => {
      dispatch(updateInvodata(field, name))
    }
  }
};

export default connectWithStore(store, AdminContainer, mapStateToProps, mapDispatchToProps);