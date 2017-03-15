import React from 'react';
import Layout from '../../components/layout';

export default() => {
  return (
    <Layout title="logo">
      <div className="flex">
        <div>
          <h3>Logo Image Tag</h3>
          <img className="logo-size" src="../../static/logo.svg" alt="react-logo"/>
        </div>
        <div>
          <h3>Logo CSS Background</h3>
          <div className="bg-logo logo-size"></div>
        </div>
      </div>
    </Layout>
  );
}