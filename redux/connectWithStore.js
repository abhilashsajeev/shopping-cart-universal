import { connect } from 'react-redux';

// Whenever we want to avoid using Provider, we can use connectWithStore to explicitly state a store to map with.
export const connectWithStore = (store, WrappedComponent, ...args) => {
  let ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return function (props) {
    return <ConnectedWrappedComponent {...props} store={store} />
  }
};