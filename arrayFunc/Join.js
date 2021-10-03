//join เอา สมาชิกใน array ทุกตัวมา"จ้อย จะ จะ จ้อย จะ จะ จ้อยๆๆ" กัน
//Warning: If an element is undefined, null or an empty array [], it is converted to an empty string.
//join()
//join(separator)
//separator : ตัวเชื่อมระหว่าง Array

let arr = ['Tus', 'Amorn', 'Mint', 'Nine'];
let joinArr = arr.join();
console.log(joinArr); // Tus,Amorn,Mint,Nine

let joinArrSep = arr.join('|'); //เชื่อมด้วย |
console.log(joinArrSep); // Tus|Amorn|Mint|Nine