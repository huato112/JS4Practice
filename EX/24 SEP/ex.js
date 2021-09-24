console.log(sum([1, 2, 3]));
//calling function, function execution
sum([1, 2, 5, 10]);
//function expression

const sum = function (numbers) {
    let total = 0; //local variable
    for (let num of numbers) total += num;
    return total;
  };

  //examples of arguments object
let products = [
  { prodId: 1, price: 10, amount: 2 },
  { prodId: 2, price: 5, amount: 10 }
];

function getProducts() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
getProducts(products);