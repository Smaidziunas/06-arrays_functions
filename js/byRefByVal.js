'use strict';
console.log('byRefByVal.js');

//  issaugomos pagal value (reiksme)
let a = 'James';
let b = true;
let c = null;
let d = 452;

let aCopy = a;

aCopy = '45';
console.log('a ===', a);
console.log('aCopy ===', aCopy);

// pagal reference [], {}, functions

let numArr = [5];

let numArrCopy = numArr;

// pakeiciu "kopija"
numArrCopy.push(4258);

console.log('numArr ===', numArr);
console.log('numArrCopy ===', numArrCopy);