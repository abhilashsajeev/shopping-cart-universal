import React from 'react';
import { store } from '../redux/store';
import { Counter } from '../components/Counter';
import { addNewCounter, removeCounter, incrementCounter, decrementCounter } from '../redux/actions/counterActions';
import { connectWithStore } from '../redux/connectWithStore';
import Layout from '../components/layout';

class CounterContainer extends React.Component {
  renderCounters(counters) {
    const onIncrement = this.props.onIncrement;
    const onDecrement = this.props.onDecrement;
    const onRemoveCounter = this.props.onRemoveCounter;

    return counters.map((c, i) => {
      return (
        <Counter
          key={i}
          value={c}
          onIncrement={() => { onIncrement(i) }}
          onDecrement={() => { onDecrement(i) }}
          onRemoveCounter={ () => { onRemoveCounter(i) }}
        />
      );
    });
  }

  render () {
    const counters = this.props.counters;
    const onAddNewCounter = this.props.onAddNewCounter;

    return (
      <Layout>
        <div>
          { this.renderCounters(counters) }
          <br/>
          <button onClick={onAddNewCounter}>Add New Counter</button>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counterReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewCounter: () => {
      dispatch(addNewCounter());
    },
    onIncrement: (index) => {
      dispatch(incrementCounter(index));
    },
    onDecrement: (index) => {
      dispatch(decrementCounter(index));
    },
    onRemoveCounter: (index) => {
      dispatch(removeCounter(index));
    },
  }
};

export default connectWithStore(store, CounterContainer, mapStateToProps, mapDispatchToProps);