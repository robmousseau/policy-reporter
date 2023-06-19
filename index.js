// -------------------------------------------------------------------------
/**
 * Definition
 * Q: Finite set of states
 * F: Set of final states
 */

const Q = ['s0', 's1', 's2'];
const F = ['s0', 's1', 's2'];

// -------------------------------------------------------------------------
/**
 * Transition Function (Q * I -> Q)
 * @param {String} qc Current state could be ('s0' | 's1' | 's2')
 * @param {String} ic Current input could be ('0' | '1')
 * @returns Next state - ('s0', 's1', 's2')
 */
const transitionF = (qc, ic) => {
  switch (qc) {
    case 's0':
      switch(ic) {
        case '0':
          return 's0';

        case '1':
          return 's1';
      }

    case 's1':
      switch(ic) {
        case '0':
          return 's2';
        
        case '1':
          return 's0';
      }

    case 's2':
      switch(ic) {
        case '0':
          return 's1';
        
        case '1':
          return 's2';
      }

    default:
      return 'Input Invalid';
  }
};

// -------------------------------------------------------------------------
/**
 * FSM
 * @param {Array} Q Array of states ['s0', 's1', 's2']
 * @param {String} I Input string (ex: '1101')
 * @param {String} q0 Init state - it should be 's0'
 * @param {Array} F Array of result states ['s0', 's1', 's2']
 * @param {Function} transitionF Transition function 
 * @returns 
 */
const FSM = (Q, I, q0, F, transitionF) => {
  let qc = q0;

  for (let index = 0; index < I.length; index ++) {
    if (I[index] === '0' || I[index] === '1') {
      if (!Q.includes(qc)) {
        return 'Input Invalid';
      } else {
        qc = transitionF(qc, I[index]);
        
        if (!F.includes(qc)) {
          return 'Input Invalid';
        }
      }        
    } else {
      return 'Input Invalid';
    }
  }
  

  return qc;
};

// -------------------------------------------------------------------------
/**
 * Main function
 * @param {String} input string of input states (ex: '101')
 * @returns The result which is moduloed by three.
 */
const main = (input) => {
  const finalState = FSM(Q, input, Q[0], F, transitionF);
  switch(finalState) {
    case 's0':
      return 0;
    
    case 's1':
      return 1;
    
    case 's2':
      return 2;

    default:
      return 'Input Invalid';
  }
};

// -------------------------------------------------------------------------
module.exports = main;

// -------------------------------------------------------------------------
