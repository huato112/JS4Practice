import {number, numberGenerator, add, sub} from "./numgenerator.js"; // import func มาใช้


let a = number(numberGenerator); //เรียก func มาเก็บในตัวแปร a ใน a ก็จะมี func multiply รอครับ
console.log(`RANNUM: ${a()}`);

let b = number(numberGenerator, 5, 10); //เก็บ range 5, 10 ใน b ไว้รอเรียกกก
console.log(`RANNUM: ${b()}`);
console.log(`RANNUM*2 : ${b(2)}`);

let c = number(add, 5, 12);
console.log(`ADD: ${c}`);

let d = number(sub, 2, 1);
console.log(`SUB: ${d}`);