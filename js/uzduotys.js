'use strict';
console.log('uzduotys.js');

// Pabandykime atlikti 5 masyvo (Array) operacijas.
// Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
// Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
// Viduryje esančią reikšmę pakeiskite „Classics“.
// Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
// Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.
// Rezultatai:
// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Jazz
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

{
let masyvas = ['Jazz', 'Blues']

masyvas.push('Rock-n-Roll');
// console.log('masyvas ===', masyvas);

masyvas.splice(1, 1, 'Classsics');
// console.log('masyvas ===', masyvas);


masyvas.shift([0]);
// console.log('masyvas ===', masyvas);


masyvas.unshift('Rap', 'Reggae');
// console.log('masyvas ===', masyvas);

}


// 2. let randomArr = [11, 'cat', true, 4, 'mouse' 5, 9, 5, 76, false]
//    1. atspausdinti kiekvieno masyvo tipa consoleje

{
let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false]; 

randomArr.indexOf([]);

let naujasRandomArr = [];

// console.log('randomArr ===', randomArr);

for (const i of randomArr) {
              // atspausida reiksmes ///
  // console.log(typeof(i));
  // naujasRandomArr = naujasRandomArr + `${[typeof(i)]} `; 

              // atspausdina masyva
      // naujasRandomArr.push(typeof(i)); 
}
console.log(naujasRandomArr);
// console.log('naujasRandomArr ===', naujasRandomArr);

}


// 3 4. SPLICE (kiekvienas pokytis su nepakeistu masyvu) let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ]
// 3.1. istrinti 'mano'
// 3.2. vietoj 'Sveiki' iterpti "Laba diena"
// 3.3 tarp 'vardas' ir 'James' iterpti 'yra'

{
let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James'];
let sent2 =  sent1.splice(0, 1, 'Laba diena');
// console.log('sent2', sent2);
// console.log('sent1', sent1);
let sent3 = sent1.splice(3,0,'yra');
// console.log('sent3 ===', sent3);
// console.log(sent1);

}


// 4.  let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ] let sent2 = [ '. ', 'is', 'Londono']

    // sujujngti masyvus i viena
    // suskaicuoti kiek kieviename masyve yra elementu

{

  let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ];
  let sent2 = [ '. ', 'is', 'Londono'];

        // sujungti i viena:
  let masyvas = sent1.concat(sent2);
  // console.log('masyvas ===', masyvas);

        // suskaiciuoja kiek elementu:
  // console.log('sent1 ===', sent1.length);
  // console.log('sent2 ===', sent2.length);
  // console.log('masyvas ===', masyvas.length);
}



// 5. let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ] let sent2 = [ '. ', 'is', 'Londono']
//    1. sujujngti masyvus i viena
//    2. suskaicuoti kiek kieviename masyve yra elementu
//    3. is sujungto masyvo grazinti atskirame masyve  ['vardas', 'James', '. ', 'is' ]

{

let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ];
let sent2 = [ '. ', 'is', 'Londono'];

    // sujungti
let masyvas = sent1.concat(sent2);

    // isimti pirmus kelis masyvus:
// let masyvas2 = masyvas.splice(0,2);

    // isimti paskutinius kelis:
// let masyvas3 = masyvas.splice(4,1);

            // arba su slice:
let masyvas4 =  masyvas.slice(2, masyvas.indexOf("Londono"))
console.log('masyvas4 ===', masyvas4);
      
// console.log('masyvas ===', masyvas);
}