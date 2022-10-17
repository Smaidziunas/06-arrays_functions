'use strict';
console.log('arr.js');

// i                      0     1         2
let paprastasMasyvas = ['red', 'green', 'blue'];
console.log('paprastasMasyvas ===', paprastasMasyvas);

// gauti green reiksme
paprastasMasyvas[1];
console.log('gauti green reiksme  ===', paprastasMasyvas[1]);

// pakeisti pirma i violet
paprastasMasyvas[0] = 'violet';

// prideti reiksme i masyvo gala = push
// Array.prototype.push()
console.log('pridejom red');
paprastasMasyvas.push('red');
console.log('paprastasMasyvas ===', paprastasMasyvas);

// Array.prototype.pop()  = nutrina paskutine reiksme

console.log('paprastasMasyvas.pop()', paprastasMasyvas.pop());

console.log('paprastasMasyvas ===', paprastasMasyvas);

// Array.prototype.shift() = nutrina pirma el
console.log('paprastasMasyvas.shift() ===', paprastasMasyvas.shift());
//
console.log('paprastasMasyvas ===', paprastasMasyvas);

// Array.prototype.unshift() = nutrina pirma el
console.log("paprastasMasyvas.unshift('Coral') ===", paprastasMasyvas.unshift('Coral'));
//
console.log('paprastasMasyvas ===', paprastasMasyvas);

console.log('paprastasMasyvas.shift() ===', paprastasMasyvas.shift());