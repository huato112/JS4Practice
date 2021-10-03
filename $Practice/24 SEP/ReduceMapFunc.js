//examples of reduce and map functions
let products = [
  { prodId: 1, price: 10, amount: 2 },
  { prodId: 2, price: 5, amount: 10 }
];

let priceIncludeVat = products.map(
  (product) => product.price + product.price * 0.07
);


console.log(priceIncludeVat);

let totalAmt = products.reduce(
  (total, curProd) => (total += curProd.amount),
  0
);
console.log(totalAmt);