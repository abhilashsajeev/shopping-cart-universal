import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER} from '../constants/ActionTypes';

export const addNewCounter = () => {
  return {
    type: ADD_COUNTER,
  }
};

export const removeCounter = (index) => {
  return {
    type: REMOVE_COUNTER,
    payload: {
      index
    }
  }
};

export const incrementCounter = (index) => {
  return {
    type: INCREMENT_COUNTER,
    payload: {
      index
    }
  }
};

export const decrementCounter = (index) => {
  return {
    type: DECREMENT_COUNTER,
    payload: {
      index
    }
  }
};