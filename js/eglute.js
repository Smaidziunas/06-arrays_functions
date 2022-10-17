'use strict';
console.log('eglute.js');

/* 
    +
   +++
  +++++
 +++++++
+++++++++
*/
let aukstai = 5;
// console.log('0000+');
// console.log('000+++');
// console.log('00+++++');
// console.log('0+++++++');
// console.log('+++++++++');

/* 
// kai aukstu 5
ciklas 1 = 4->0; 1->+
ciklas 2 = 3->0; 3->+
ciklas 3 = 2->0; 5->+
ciklas 4 = 1->0; 7->+
ciklas 5 = 0->0; 9->+
a 0 +
1 4 1
2 3 3
3 2 5 
4 1 7
5 0 9
*/
let laikinaEilute = '';
for (let i = 1; i <= aukstai; i++) {
  // console.log('aukstas ===', i);

  // ciklas generuoti tarpams arbanuliams
  for (let j = aukstai - i; j > 0; j--) {
    // console.log('j ===', j);
    laikinaEilute += ' ';
  }
  // i = 1; aukstai 5
  // generuojam reikalinga skaiciu pliusiuku priklausomai nuo auksto
  // i * 2 - 1 = generuoja 1, 3, 5, 7 ir tt
  for (let k = 1; k <= i * 2 - 1; k++) {
    laikinaEilute += '+';
  }

  console.log('<li>', laikinaEilute, '</li>');
  // issivalom laikina eilute kitam aukstui
  laikinaEilute = '';
}