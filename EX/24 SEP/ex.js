console.log(sum([1, 2, 3]));
//calling function, function execution
sum([1, 2, 5, 10]);
//function expression

const sum = function (numbers) {
    let total = 0; //local variable
    for (let num of numbers) total += num;
    return total;
  };