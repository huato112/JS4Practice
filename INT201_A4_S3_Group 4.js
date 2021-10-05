console.log('///////////////////////////')
console.log('/////SOME///////')
console.log('///////////////////////////')
    ///////////////////////////////////////////////////////////////
    //function SOME เมื่อมีบางตัวในเป็น True ก็จะ return true อารมณ์เดียวกับ "หรือ" ในวิชาตรรกศาสตร์ 
    //ถ้า function every ก็จะคล้าย some คือถ้ามี false ตัวนึงจะเป็น false มันคือ "และ" ในวิชาตรรกศาสตร์ 
    ///////////////////////////////////////////////////////////////
//true หมดเลยยย
let arrTrue = [true, true, true];
console.log(arrTrue.every((value) => value)); //true

//ลองมี false หลุดมาซักตัว
let arrFalse = [true, true, false];
console.log(arrFalse.every((value) => value)); //false

//ลองแบบ false หมด
let arrAllFalse = [false, false, false];
console.log(arrAllFalse.some((value) => value)); //false

//ลองใช้จริง
let arr1 = [2, 4, 6, 8, 10];
let arr2 = [2, 4, 6, 8, 9];
let isEven = (value) => (value % 2 == 0); //function check เลขคู่
console.log(arr1.some((value) => isEven(value))); //true

//ลองแบบเป็น false มีคี่หลุดมาตัวนึง
console.log(arr2.some((value) => isEven(value))); //true

//ลองแบบ false หมด คี่ทุกตัว
let arrNumAllFalse = [1, 3, 5, 7, 9];
console.log(arrNumAllFalse.some((value) => isEven(value))); //false

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
console.log('///////////////////////////')
console.log('//////////INCLUDE///////////')
console.log('///////////////////////////')
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//include ดูว่าใน array มี element ที่ต้องการไหม
//ถ้ามีตัวที่ต้องการ มันจะ return มาเป็น true ให้ ไม่มีเป็น false
//includes(searchElement)
//includes(searchElement, fromIndex)
//fromIndex เป็น optional
//fromIndex ก็คือตามชื่อ หาตั้งแต่ Index .......
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
let arrInclude = ['Amorn', 500, 'Tus', [5, 4, 'Mint']];

console.log(arrInclude.includes('Amorn')); //true
console.log(arrInclude.includes('Mint')); //false หาไม่เจอเพราะ Mint อยู่ใน Array มันดูแค่ชั้นเดียว
console.log(arrInclude.includes([5, 4, 'Mint'])); //false เพราะ Array เป็น Object เวลาสร้างใหม่จะมี Address คนละตัว สำคัญมากกก
console.log(arrInclude.includes(500)); // true
let arr0 = [5, 4, 'Mint'];
let arr11 = ['Amorn', 500, 'Tus', arr0]; //แต่ถ้าเราเก็บไว้ในตัวแปร เราสามารถหาจากตัวที่เราสร้างได้เลยยย
console.log(arr11.includes(arr0)); //true  เพราะเราหาด้วย arr0 มันมี address เดียวกับ arr0 ใน arr11
//แบบใช้ fromIndex
console.log("//////////////////////////v.fromIndex");
console.log("//////////////////////////v.fromIndex");
let arrFromIndexTest = [1,2,3,4,5,6,7,8,9] // มี 9 ตัว
console.log(arrFromIndexTest.includes(2,2)); //false เพราะเริ่มหาตั้งแต่ index ที่ 2
console.log(arrFromIndexTest.includes(2,1)); // true เพราะ 2 อยู่ index ที 1 พอดี