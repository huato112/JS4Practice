let student = ['Tus', 'Amorn', 'Mint', 'Nine'];
console.log(student);

//shift หาย ตัวแรกหายแล้ว return ตัวแรก
let shifted = student.shift();
console.log(shifted);
console.log(student);

//unshift insert ค่าไว้ตัวแรก
student = ['Tus', 'Amorn', 'Mint', 'Nine'];
student.unshift('ST', 'Sim');
console.log(student);

//ลอง unshift อีกแบบแต่ข้อมูลเดิมดู
student = ['Tus', 'Amorn', 'Mint', 'Nine'];
student.unshift('ST');
student.unshift('Sim');
console.log(student);
//เห็นว่าจะได้ผลลัพธ์ ต่างกัน