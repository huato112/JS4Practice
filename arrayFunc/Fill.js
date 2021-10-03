// fill เติมค่าลงไป
// fill(value)
// fill(value, start)
// fill(value, start, end)
// value : ค่าที่จะเติม
// start : เริ่มที่ index ไหน
// end : จบที่ไหนไม่เติมตัวจบ

let arr = ['Tus', 'Amorn', 'Mint', 'Nine'];
arr.fill('ST');
console.log(arr); // [ 'ST', 'ST', 'ST', 'ST' ]

arr = ['Tus', 'Amorn', 'Mint', 'Nine'];
arr.fill('ST', 1);
console.log(arr); // [ 'Tus', 'ST', 'ST', 'ST' ]

arr = ['Tus', 'Amorn', 'Mint', 'Nine'];
arr.fill('ST', 1, 2);
console.log(arr); // [ 'Tus', 'ST', 'Mint', 'Nine' ]