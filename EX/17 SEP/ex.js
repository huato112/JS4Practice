//#1
let num1 = 10;
let num2 = 20;
num2 = num1; //num1 assigns value(10) to num2
num2 = 55; //*insert this line
console.log(num1); //num1=?
console.log(num2); //num2=?

//#2
let std1 = { id: 1, name: 'Susan' };
let std2 = { id: 2, name: 'John' };
std2 = std1; //std1 assigns value (memory address) 
             //points to the same memory address
std2.name = 'Peter';
console.log(std1); //std1=?
console.log(std2); //std2=?
console.log(num1 === num2); //num1===num2 ? primitive values are compared
console.log(std1 === std2); //std1===std2 ? memory address are compared

//#3
function doSomething1(student) {
  //student is a formal parameter //student=std3
  student.id = 635000111;
}
let std3 = { id: 3, name: 'Joe' };
console.log(typeof std3);
doSomething1(std3); //std3 is an actual parameter
console.log(std3); //



//#4
function doSomething2(num) {
  //num=num3
  num = 555;
}
let num3 = 1;
console.log(typeof num3);
doSomething2(num3);
console.log(num3); //1

let arr1 = [10, 'in progress', true, 1];
console.log(arr1[0]); // [integer expression]
console.log(arr1.length);
console.log(arr1[arr1[arr1.length-1]]);

let colors = [
    ['pink', 'red'], //element#1
    ['yellow', 'orange', 'brown'] //element#2
  ];
  console.log(colors[0][colors[0].length - 1]);
  console.log(colors[colors.length - 1][colors[1].length - 1]); //brown
  console.log(colors[colors.length - 1][colors[colors.length - 1].length - 1]); //brown
  