import { addCounter, removeCounter, incrementCounter, decrementCounter } from './counterHelpers';

it('adds a counter', () => {
  const counters = [];
  expect(addCounter(counters)).toEqual([0]);
});

it('adds many counters', () => {
  let counters = [];
  counters = addCounter(counters);
  counters = addCounter(counters);
  counters = addCounter(counters);
  expect(counters).toEqual([0, 0, 0]);
});

it('removes the first counter', () => {
  let counters = [0];
  counters = removeCounter(counters, 0);
  expect(counters).toEqual([]);
});

it('removes the second counter', () => {
  let counters = [1, 0, 1];
  counters = removeCounter(counters, 1);
  expect(counters).toEqual([1, 1]);
});

it('increments the first counter', () => {
  let counters = [0, 0];
  counters = incrementCounter(counters, 0);
  expect(counters).toEqual([1, 0]);
});

it('increments the second counter twice', () => {
  let counters = [0, 0, 0];
  counters = incrementCounter(counters, 1);
  counters = incrementCounter(counters, 1);
  expect(counters).toEqual([0, 2, 0]);
});

it('decrement the first counter', () => {
  let counters = [0, 0];
  counters = decrementCounter(counters, 0);
  expect(counters).toEqual([-1, 0]);
});

it('decrements the second counter twice', () => {
  let counters = [0, 0, 0];
  counters = decrementCounter(counters, 1);
  counters = decrementCounter(counters, 1);
  expect(counters).toEqual([0, -2, 0]);
});