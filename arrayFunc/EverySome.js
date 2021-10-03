//every จะ return true ก็ต่อเมื่อทุกๆตัวใน array ทำ function แล้วเป็น true
//every((element, index, array) => { ... } )
let arrTrue = [true, true, true];
console.log(arrTrue.every((value) => value)); //true

//ลองมี false หลุดมาซักตัว
let arrFalse = [true, true, false];
console.log(arrFalse.every((value) => value)); //false

//ลองใช้จริง
let arr1 = [2, 4, 6, 8, 10];
let isEven = (value) => (value % 2 == 0); //function check เลขคู่
console.log(arr1.every((value) => isEven(value))); //true

//ลองแบบเป็น false มีคี่หลุดมาตัวนึง
let arr2 = [2, 4, 6, 8, 9];
console.log(arr2.every((value) => isEven(value))); //false

console.log('///////////////////////////')
    ///////////////////////////////////////////////////////////////
    //Some จะ return true เมื่อบางตัวทำใน function แล้วมีบางตัวได้ true
    ///////////////////////////////////////////////////////////////
console.log(arrTrue.some((value) => value)); //true
console.log(arrFalse.some((value) => value)); //true

//ลองแบบ false หมด
let arrAllFalse = [false, false, false];
console.log(arrAllFalse.some((value) => value)); //false

//ลองใช้จริง
console.log(arr1.some((value) => isEven(value))); //true

//ลองแบบเป็น false มีคี่หลุดมาตัวนึง
console.log(arr2.some((value) => isEven(value))); //true

//ลองแบบ false หมด
let arrNumAllFalse = [1, 3, 5, 7, 9];
console.log(arrNumAllFalse.some((value) => isEven(value))); //false