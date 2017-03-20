import React from 'react';
import Layout from '../components/layout';
import { getAllProducts } from '../redux/actions/index'
import { store } from '../redux/store';



export default () => {
  return (
      <Layout title="home">
        <h1 className="home-header">Order History</h1>
        
      </Layout>
    
  );
};