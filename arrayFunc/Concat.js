//concat เอา Array มา Fusion กัน
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
//[ 'a', 'b', 'c', 'd', 'e', 'f' ]

//ลอง concat แบบใส่ value เข้าไปเลย
const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric); //[ 'a', 'b', 'c', 1, 2, 3 ]
//มันมองว่า 1 ตัวแรกเป็น primitive ธรรมดาเลย concat ตามปกติ
//แต่ [2,3] มันมองว่าเป็น array group เดียวกันเลยดึงข้อมูลใน array มาอีกที

//แล้วลองใส่ array ซ้อน array
const num1 = [
    [1]
];
const num2 = [2, [3]];
const numbers = num1.concat(num2);
console.log(numbers);
// results in [[1], 2, [3]]
// modify the first element of num1
num1[0].push(4);
console.log(numbers);
// results in [[1, 4], 2, [3]]
//จะเห็นถ้าเป็น Array ซ้อน Array เวลา concat มันจะใส่ Array ลงไปเลย