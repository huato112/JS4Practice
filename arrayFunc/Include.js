//include ดูว่าใน array มี element ที่ต้องการไหม
//includes(searchElement)
//includes(searchElement, fromIndex)
//fromIndex เป็น optional
let arr = ['Amorn', 500, 'Tus', [5, 4, 'Mint']];

console.log(arr.includes('Amorn')); //true
console.log(arr.includes('Mint')); //false หาไม่เจอเพราะ Mint อยู่ใน Array มันดูแค่ชั้นเดียว
console.log(arr.includes([5, 4, 'Mint'])); //false เพราะ Array เป็น Object เวลาสร้างใหม่จะมี Address คนละตัว

let arr0 = [5, 4, 'Mint'];
let arr1 = ['Amorn', 500, 'Tus', arr0];
console.log(arr.includes(arr0)); //true