import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import stylesheet from './stylesheets/global.scss';

import { Nav, Navbar, NavItem, Button, Glyphicon } from 'react-bootstrap';
import { store } from '../redux/store';
import Router from 'next/router'

export default ({ children, title = 'This is the default title', cartLength }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {/*<style dangerouslySetInnerHTML={{ __html: stylesheet }} />*/}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />

    </Head>


    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} >
          <span onClick={() => Router.push('/admin')}>
            Admin</span>
        </NavItem>
        <NavItem eventKey={2} >
          <span onClick={() => Router.push('/products')}>Products</span>
        </NavItem>
        <NavItem eventKey={2} >
          <span onClick={() => Router.push('/')}>Order History</span>
        </NavItem>
      </Nav>
      <Nav pullRight style={{display:(cartLength===undefined ? 'none' : '')}}>
        <NavItem eventKey={3} href="#">
          <Button >
            <Glyphicon glyph="shopping-cart" />
            <span onClick={() => Router.push('/cart')}>
              Cart {cartLength > 0 ? `(${cartLength})` : ''}
            </span>
          </Button>
        </NavItem>
      </Nav>
    </Navbar>



    {children}

    <footer>
      I am a footer. I am here to stay.
    </footer>
  </div>
)