import {numberGenerator} from "./numgenerator.js"; // import func มาใช้


let a = numberGenerator(); //เรียก func มาเก็บในตัวแปร a ใน a ก็จะมี func multiply รอครับ
console.log(a()); 

let b = numberGenerator(5,10); //เก็บ range 5, 10 ใน b ไว้รอเรียกกก
console.log(b());
console.log(b(2));

let c = numberGenerator(8,10)(2); //อันนี้เรียกแบบเก็บปุ๊บเรียบปั๊บ ครบจบ
console.log(c);
