'use strict';
console.log('splice.js');

// i            0       1         2          3
let spalvos = ['red', 'green', 'blue', 'black'];

console.log('spalvos ===', spalvos);

// Array.prototype.splice(<nuo kur pradedam(index)>, <kiekIstrinti>, <naujas el>, <naujas el> ... )

// console.log("spalvos.splice(1, 0, 'violet') ===", spalvos.splice(0, 0, 'violet', 'orange'));
// console.log("spalvos.splice(1, 0, 'violet') ===", spalvos.unshift('violet', 'orange'));
// console.log('spalvos ===', spalvos);

// Array.prototype.slice(<start>, <end>)
// <start> - skaicius nuo kur pradedam
// <<end>> - skaicius iki kur paimti, neimtinai

console.log('spalvos.slice(1, 3) ===', spalvos.slice(1, 3));
let spalvuAtkarposCopija = spalvos.slice(1, 3);

console.log('spalvuAtkarposCopija ===', spalvuAtkarposCopija);
console.log('spalvos ===', spalvos);

let paskDuEl = spalvos.slice(-2);
console.log('paskDuEl ===', paskDuEl);

let visiSpalvosElNuoVieneto = spalvos.slice(1);
console.log('visiSpalvosElNuoVieneto ===', visiSpalvosElNuoVieneto);