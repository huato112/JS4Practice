//Slice ไสลด์ array ออกเป็นส่วนๆ
//slice(start, end)
//start : index เริ่มต้น
//end : index สุดท้ายแต่ไม่เอาตัวนั้น
let arr = ['Tus', 'Amorn', 'Mint', 'Nine'];
console.log(arr);
console.log(arr.slice(1)); //  [ 'Amorn', 'Mint', 'Nine' ]
console.log(arr.slice(1, 2)); //  [ 'Amorn' ]   ไม่เอาตัวที่ end Mint เลยไม่ได้เกิด
console.log(arr.slice(1, 4)); //  [ 'Amorn', 'Mint', 'Nine' ]
///////////////////////////////////////////////////////////////
console.log('///////////////////////////////////////////////////////////////');
///////////////////////////////////////////////////////////////
//reverse ก็คือ reverse แค่นั้นเลยไม่มีอะไรเลย Ez เกิน
let arr1 = arr.reverse();
console.log(arr);
console.log(arr1);