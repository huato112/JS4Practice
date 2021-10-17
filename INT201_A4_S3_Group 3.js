console.log('///////////////////////////')
console.log('/////EVERY///////')
console.log('///////////////////////////')
    ///////////////////////////////////////////////////////////////
    //ถ้า function every ก็จะคล้าย some คือถ้ามี false ตัวนึงจะเป็น false มันคือ "และ" ในวิชาตรรกศาสตร์ 
    ///////////////////////////////////////////////////////////////
    //return เป็น true, false
//true หมดเลยยย
let arrTrue = [true, true, true];
console.log(arrTrue.every((value) => value)); //true
//ลองมี false หลุดมาซักตัว
let arrFalse = [true, true, false];
console.log(arrFalse.every((value) => value)); //false
console.log(arrFalse.every((value) => value));

//ลองแบบ false หมด
let arrAllFalse = [false, false, false];
console.log(arrAllFalse.every((value) => value)); //false

//ลองใช้จริง
let arr1 = [2, 4, 6, 8, 10];
let arr2 = [2, 4, 6, 8, 9];
let isEven = (value) => (value % 2 == 0); //function check เลขคู่

// function isEven(value) {
//     return value % 2 == 0;
// }
// แบบไม่ arrow


console.log(arr1.every((value) => isEven(value))); //true

//ลองแบบเป็นมีคี่หลุดมาตัวนึง
console.log(arr2.every((value) => isEven(value))); //false

//ลองแบบ false หมด คี่ทุกตัว
let arrNumAllFalse = [1, 3, 5, 7, 9];
console.log(arrNumAllFalse.every((value) => isEven(value))); //false

//ลองใช้จริงอีกแบบ
const ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
  }

console.log(ages.every(checkAdult))   // false มี 2 คนที่เป็น false



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
console.log('///////////////////////////')
console.log('//////////INDEXOF///////////')
console.log('///////////////////////////')
//indexOf(searchElement)
//indexOf(searchElement, fromIndex)
//หา index ของค่าใน array ตัวแรกตามค่าที่ใส่เข้าไป
//return เป็น index 
let arr = [4, 2, 6, 8, 2];
console.log(arr.indexOf(2)); //1
console.log(arr.indexOf(6)); //2
console.log(arr.indexOf(4)); //0
//ลองใส่ fromIndex เพิ่ม
console.log(arr.indexOf(2, 1)); //1 เริ่มที่ index 1 ans 1
console.log(arr.indexOf(2, 2)); //4 เริ่มที่ index 2 ans 4
//แสดงว่า fromIndex คือนับตัวนั้นด้วย

let arrstr = ['kobfha', 'exist', 'mxxn', 'amorn', 'jame', 'jubby'];
console.log(arrstr.indexOf('mxxn')); //2
console.log(arrstr.indexOf('Mxxn')); //-1 ไม่เจอ

let a = [4,9,8];
let arrinarr = [1,5,6,[4,5,6],8,a];
console.log(arrinarr.indexOf([4,5,6])); //-1 เพราะ Array เป็น Object Address คนละตัวกับใน arrinarr
console.log(arrinarr.indexOf(a)); //5