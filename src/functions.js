/*
//Normal Function
function addToCart(productName) {
  console.log(productName + ' Sepete Eklendi!');
}

addToCart('Laptop');

//Arrow Function
let sayHello = name => {
  console.log('Hello ' + name);
};

sayHello('KAOS');

//Another Option For Functions
let sayHello2 = function (name) {
  console.log('Hello2 ' + name);
};

sayHello2('KAOS');
*/
//-----------------------------------------------------
/*
function addToCart(product) {
  console.log(
    'Ürün Adı: ' +
      product.productName +
      '\n' +
      'Ürün Fiyatı: ' +
      product.unitPrice +
      '\n' +
      'Ürün Adedi: ' +
      product.quantity
  );
}

let product1 = { productName: 'Elma', unitPrice: 10, quantity: 5 };
let product2 = { productName: 'Armut', unitPrice: 2, quantity: 14 };
let product3 = { productName: 'Limon', unitPrice: 13, quantity: 22 };

product2 = product3;
product2.productName = 'Karpuz';

addToCart(product1);
addToCart(product2);
addToCart(product3);
*/
//-----------------------------------------------------

//Birden Fazla Ürün Gönderme

/*
function addToCart(products) {
  console.log(products);
}

let products = [
  { productName: 'Elma', unitPrice: 10, quantity: 5 },
  { productName: 'Armut', unitPrice: 2, quantity: 14 },
  { productName: 'Limon', unitPrice: 13, quantity: 22 }
];

addToCart(products);
*/

/*
let add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(10, 20);
*/

let [
  icAnadolu,
  marmara,
  karadeniz,
  [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]
] = [
  { name: 'İç Anadolu', population: '20M' },
  { name: 'Marmara', population: '30M' },
  { name: 'Karadeniz', population: '10M' },
  [
    ['Ankara', 'Konya'],
    ['İstanbul', 'Bursa'],
    ['Samsun', 'Sinop']
  ]
];

console.log(karadeniz);
console.log(karadenizSehirleri);

let newProductName, newUnitPrice, newQuantity;
({
  productName: newProductName,
  unitPrice: newUnitPrice,
  quantity: newQuantity
} = { productName: 'Elma', unitPrice: 10, quantity: 5 });
