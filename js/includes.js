'use strict';
console.log('includes.js');

// i        0       1         2       3
let spalvos = ['red', 'green', 'blue', 'black'];


// indexOf()
let blueIndex = spalvos.indexOf('blue');

console.log('blueIndex ===', blueIndex);

if(blueIndex === -1) {
  console.log('neradau elemento');
}

// includes()
let blue11Includes = spalvos.includes('blue11');

if(!spalvos.includes('blue11')) {
  console.log('neradau elemento');
}





