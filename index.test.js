const FSM = require('./index.js');

// -------------------------------------------------------------------------
// Invalid Inputs
test('Input Invalid => Input Invalid', () => {
  expect(FSM('011.101')).toBe('Input Invalid');
});

test('Input Invalid: 011.101 => Input Invalid', () => {
  expect(FSM('011.101')).toBe('Input Invalid');
});

// -------------------------------------------------------------------------
// Initial State
test('Initial State: 0 % 3 => 0', () => {
  expect(FSM('0')).toBe(0);
});

// -------------------------------------------------------------------------
// Transition States
//s0 -> s0
test('s0 -> s0 : 00 % 3 => 0', () => {
  expect(FSM('00')).toBe(0);
});

// s0 -> s1
test('s0 -> s1 : 01 % 3 => 1', () => {
  expect(FSM('01')).toBe(1);
});

// s1 -> s2
test('s1 -> s2: 10 % 3 => 2', () => {
  expect(FSM('10')).toBe(2);
});

// s1 -> s0
test('s1 -> s0: 11 % 3 => 0', () => {
  expect(FSM('11')).toBe(0);
});

// s2 -> s1
test('s2 -> s1: 100 % 3 => 1', () => {
  expect(FSM('100')).toBe(1);
});

// s2 -> s2
test('s2 -> s2: 101 % 3 => 2', () => {
  expect(FSM('101')).toBe(2);
});

// -------------------------------------------------------------------------