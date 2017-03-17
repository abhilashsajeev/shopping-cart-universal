import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'
import ProductItem from './ProductItem'

const setup = product => {
  const actions = {
    onAddToCartClicked: jest.fn()
  }

  const component = shallow(
    <ProductItem product={product} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('Button'),
    product: component.find(Product)
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      title: 'Product 1',
      price: 9.99,
      inventory: 6,
      author: 'Author',
      image: 'http://someinage.url'
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual({ title: 'Product 1', price: 9.99 })
  })

  it('should render Add To Cart message', () => {
    const { button } = setup(productProps);
    console.log(button.children().text());
    expect(button.children().text()).toMatch(/^Add to cart/)
  })

  it('should not disable button', () => {
    const { button } = setup(productProps)
    expect(button.prop('disabled')).toEqual(false)
  })

  it('should call action on button click', () => {
    const { button, actions } = setup(productProps)
    button.simulate('click')
    expect(actions.onAddToCartClicked).toBeCalled()
  })

  describe('when product inventory is 0', () => {
    beforeEach(() => {
      productProps.inventory = 0
    })

    it('should render Sold Out message', () => {
      const { button } = setup(productProps)
      expect(button.children().text()).toMatch(/^Sold Out/)
    })

    it('should disable button', () => {
      const { button } = setup(productProps)
      expect(button.prop('disabled')).toEqual(true)
    })
  })
})