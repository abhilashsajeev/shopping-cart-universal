import React from 'react';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
import Layout from '../components/layout';

const renderUsers = (users) => users.map((u, i) => (<div key={i}>{ u.name }</div>));

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return { users };
  }

  render () {
    const { users } = this.props;
    return (
      <Layout title="users">
        <h1 className="users-header">Users</h1>
        <div>
          { renderUsers(users) }
        </div>
      </Layout>
      );
  }
}