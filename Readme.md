# Modulo Three Exercise

I used advanced method by implementing the FSM.

Our FA(finite automaton) has 5-tuple now.

<hr/>

### Running Guide
I used Node.js and Jest. The code for implementing the FSM is writen with JavaScript code. So I am using Node.js for running the code.
For Testing, I used Jest.

You need to install the dependencies first - Jest
```
npm install
```

Then you can run the testing with the following command.
```
npm run test
```
Then, you will see the testing result.

<hr/>

## 1. Definition

### Q: finite set of states;
- We have three state - `s0`, `s1`, `s2`

### I: finite input of alphabet;
- We have two state - `0`, `1`

### q0: initial state;
- q0 is always s0 which means the result is `0`

### F: set of final states;
- Same as finite set of states - `s0`, `s1`, `s2`

### Transition function;
- It transit from one state to another state according to the input.

<hr/>

## 2. Implementation
- I defined the Q(Finite set of states) and F(Set of final states) as array [`'s0'`, `'s1'`, `'s2'`] which are same.

- I implemented the transition function which converts `q0(current state)` with `ic(current input)`.

- Defined the FSM with 5 tuple and returns the final state.

<hr/>

## 3. Testing
We have three different cases for testing.
- Invalid inputs

  Strings with different characters outside of `0` and `1` is Invalid.

- Initial State

  Test case for initial state is `'0'`.

- Transition States
  - s0 -> s0

    The example test case for this is `'00'`

    Final state: `s0` => 0
  - s0 -> s1

    The example test case for this is `'01'`

    Final state: `s1` => 1
  - s1 -> s2

    The example test case for this is `'10'`

    Final state: `s2` => 2
  - s1 -> s0

    The example test case for this is `'11'`

    Final state: `s0` => 0
  - s2 -> s1

    The example test case for this is `'100'`

    Final state: `s1` => 1
  - s2 -> s2

    The example test case for this is `'101'`

    Final state: `s2` => 2

<hr/>