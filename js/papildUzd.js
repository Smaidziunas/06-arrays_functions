'use strict';
console.log('papildUzd.js');

// 1. Susikurkite skaičių masyva 'numbersArray' su siais nariais : 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20

let index = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];

let indexCp = index.slice();


// console.log('indexCp ===', indexCp);


// 2. Sekančias užduotis atlikti su naujais masyvais(kopijomis)

// 3. Padauginti masyvo narius iš 2
{
let indexCp2 = [];

for (const i of indexCp) {
   indexCp2.push((i * 2));
}
// console.log(indexCp2);
}

// 4. Pakelti masyvo narius kvadratu
 
{
    let index4 = [];

console.log(index4)

for(let i = 0; i < indexCp.length; i++) {
    index4.push (indexCp[i] * indexCp[i]);
//     console.log(indexCp[i]);
}
// console.log('index4 ===', index4); 
}

// 5. Padauginti masyvo narius iš jų index'0 (vietos masyve)

// 6. Atrinkti tiktai teigimų elementų masyvą

{
let posMasyvas = [];

for(let i = 0; i < indexCp.length; i++) {
if(indexCp[i] > 0) {
posMasyvas.push(indexCp[i]);
} else {
continue
} 
}
// console.log('posMasyvas ===', posMasyvas);

}

//  7. Sudėti tiktai neigiamų elementų masyvą

{
let masyvas = [];

for (let i = 0; i < indexCp.length; i++) {
    if (indexCp[i] < 0) {
        masyvas.push(indexCp[i]);
    } else {
        continue
    }
}
// console.log('masyvas ===', masyvas);

}

// 8. Atrinkti tiktai lyginių skaičių masyvą

{

let evenMasyvas = [];

for(let i = 0; i < indexCp.length; i++) {
    if(indexCp[i] % 2 === 0) {
        evenMasyvas.push(indexCp[i]);
    } else {
        continue
    }
}
// console.log('evenMasyvas ===', evenMasyvas);

}


// 9. Atrinkti tiktai nelyginių skaičių masyvą

{
let oddMasyvas = [];

for(let i = 0; i < indexCp.length; i++){
if(indexCp[i] % 2 !== 0) {
    oddMasyvas.push(indexCp[i]);
} else {
    continue
}
}
// console.log('oddMasyvas ===', oddMasyvas);

}

// 10. Visas neigiamas vertes masyve padaryti teigiamomis

{
let newMasyvas = [];

for(let i = 0; i < indexCp.length; i++){
    if(indexCp[i] < 0){
        newMasyvas.push(-(indexCp[i]))
    } else {
        newMasyvas.push(indexCp[i]);
    }
}
// console.log('newMasyvas ===', newMasyvas);

}

// 11. Pakelti visas masyvo reikšmes laipsniu 'index'

{

let masyvasIndex = [];

for(let i = 0; i < indexCp.length; i++){
    masyvasIndex.push(indexCp[i] * indexCp[i]);
    // console.log('masyvasIndex[i] ===', masyvasIndex[i]);
}
    // console.log('masyvasIndex ===', masyvasIndex);
}


// 12. Atrinkti tik natūralių skaičių masyvą

{
let integerMasyvas = [];

for(let i = 0; i < indexCp.length; i++) {

let integerI = Number.isInteger(indexCp[i]);

if(integerI === true && indexCp [i] > 0){
    integerMasyvas.push(indexCp[i]);

} else {
    continue;
}
}
// console.log('integerMasyvas ===', integerMasyvas);

}

// 13. Suapvalinti visas masyvo reikšmes iki sveikų skaičių (iki dvieju sk po kablelio)

{
let rd2masyvas = [];

for(let i = 0; i < indexCp.length; i++){
let rounded = indexCp[i].toFixed(2);
rd2masyvas.push(rounded)
}
// console.log('rd2masyvas ===', rd2masyvas);

}

// 14. Atrinkti kas antrą elementą 

{
let masyvas =  [];

for(let i = 0; i < indexCp.length; i+=2){
masyvas.push(indexCp[i]);
}
// console.log('masyvas ===', masyvas);

}

// 15. Atrinkti kas penktą elementą

{
let masyvas =  [];

for(let i = 0; i < indexCp.length; i+=5){
masyvas.push(indexCp[i]);
}
// console.log('masyvas ===', masyvas);

}

// 16. Sukurti funkciją, kuri ima masyvą ir atspausdina kiek- vieną jo reikšmę atskirai: [0] => 2. (nieko negrąžina)

{

    function masyvas(indexCp3){

let masyvas2 = [];
for(let i = 0; i < indexCp3.length; i++){

    // atspausdina visas reiksmes i viena indeksa:
    let indexMasyvas = indexCp3[i];
masyvas2.push(`[${i}] ${indexMasyvas}`);

    // grazina po viena reiksme kartu su indeksu:
// console.log(`[${i}] => ${indexMasyvas}`);

}
// return (masyvas2)
// console.log('masyvas ===', masyvas);
}

// console.log(masyvas([2,3,4,5]));


}



// 17. Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą

{ 
function masyvas(masyvasSum) {

let result = 0;

for(let i = 0; i < masyvasSum.length; i++) {
    result = result + masyvasSum[i]; 
}

// return `The sum of the index numbers is ${result}`;

}
// console.log(masyvas(indexCp));

}

// 18. Sukurti funkciją, kuri ima masyvą ir grąžina visų ele- mentų vidurkį

{
function indexSumAvg(writeIndex){

let resultSum = 0;
let indexNb = 0;

for (let i = 0; i < writeIndex.length; i++) {
    resultSum = resultSum + indexCp[i];
    indexNb = indexNb + i;
}

let resultAvg = resultSum / indexNb;

// return resultAvg.toFixed(2);

}

// console.log('resultAvg FUNCTION ===', indexSumAvg(indexCp));


}


// 19. Sukurti funkciją, kuri ima masyvą ir grąžina didžiau- sią skaičių masyve.

{ 
function maxRes(writeIndex){

let result = 0; 

for(let i = 0; i < writeIndex.length; i++){
if(writeIndex[i] >= result) {
    result = writeIndex[i];
} else { 
    continue;
}
}

// return result
}

// console.log('maxRes ===', maxRes(indexCp));
}

// 20. Sukurti funkciją, kuri ima masyvą ir grąžina mažiau- sią skaičių masyve.

{ 
function minRes(writeIndex){

let result = 0; 

for(let i = 0; i < writeIndex.length; i++){
if(writeIndex[i] <= result) {
    result = writeIndex[i];
} else { 
    continue;
}
}

// return result
}

// console.log('minRes ===', minRes(indexCp));
}

// 21. Sukurti funkciją, kuri ima masyvą ir išrikiuja jo ele- mentus nuo mažiausio iki didžiausio ir grąžina tą masyvą.


let sort1 = [32, 23, 1, 2, 40, 21];

function sort2(sort1) { 

sort1.sort(function(a, b){
    return a - b
})
return sort1
}

