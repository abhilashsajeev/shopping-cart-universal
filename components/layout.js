import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import stylesheet from './stylesheets/global.scss';

import { Nav, Navbar, NavItem } from 'react-bootstrap';


export default ({ children, title = 'This is the default title' }) => (
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
        <Link href='/'><a>Home</a></Link>
        <Link href='/products'><a>Products</a></Link>
        <Link href='/cart'><a>Cart</a></Link>
      </Nav>
    </Navbar>



    {children}

    <footer>
      I am a footer. I am here to stay.
    </footer>
  </div>
)