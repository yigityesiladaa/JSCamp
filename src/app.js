//Ders 1

console.log('Merhaba Kodlama.io');

let dolarDun = 9.2;
let dolarBugun = 9.5;

{
  let dolarDun = 9.1;
}

console.log(dolarDun);

let konutKredileri = [
  'Konut Kredisi',
  'Emlak Konut Kredisi',
  'Kamu Konut Kredisi'
];

for (let i = 0; i < konutKredileri.length; i++) {
  console.log(konutKredileri[i]);
}

console.log(konutKredileri);

/*
//Ders 1 Ödev Video Uygulaması

let student = { id: 1, name: 'Yiğit' };
//console.log(student);

function save(student) {
  console.log(student.name + ' Saved');
}

//save(student);

//rest
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products);
};

//console.log(typeof showProducts);

showProducts(4, 'Elma', 'Armut', 'Karpuz');

//spread

let points = [1, 2, 78, 145, 36, 25, 12];
console.log(Math.max(...points));

//Destructuring

let populations = [10000, 20000, 30000];
let [small, medium, high] = populations;
console.log(small);
console.log(medium);
console.log(high);
*/
