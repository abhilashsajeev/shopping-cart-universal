import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../constants/actionTypes';
import { addCounter, removeCounter, incrementCounter, decrementCounter } from './counterHelpers';

export const counterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return addCounter(state);
    case REMOVE_COUNTER:
      return removeCounter(state, action.payload.index);
    case INCREMENT_COUNTER:
      return incrementCounter(state, action.payload.index);
    case DECREMENT_COUNTER:
      return decrementCounter(state, action.payload.index);
    default:
      return state;
  }
};