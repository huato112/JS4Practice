//push คล้ายๆ unshift แต่ไปเพิ่มที่ตำแหน่งสุดท้ายแทน
//push(element0)
//push(element0, element1)
//push(element0, element1, ... , elementN)

let arr = ['Tus', 'Amorn', 'Mint', 'Nine'];
console.log(arr); //  [ 'Tus', 'Amorn', 'Mint', 'Nine' ]
arr.push('ST');
console.log(arr); //  [ 'Tus', 'Amorn', 'Mint', 'Nine', 'ST' ]

arr = ['Tus', 'Amorn', 'Mint', 'Nine'];
arr.push('ST', 'Mick');
console.log(arr); //  [ 'Tus', 'Amorn', 'Mint', 'Nine', 'ST', 'Mick' ]

//ตรงนี้ไม่เหมือนกับ unshift เพราะไปเพิ่มตัวท้ายลำดับเลยเหมือนเดิม
arr = ['Tus', 'Amorn', 'Mint', 'Nine'];
arr.push('ST');
arr.push('Mick');
console.log(arr); //  [ 'Tus', 'Amorn', 'Mint', 'Nine', 'ST', 'Mick' ]

//////////////////////////////////////////////////////
console.log('//////////////////////////////////////////////////////');
//////////////////////////////////////////////////////

//pop คล้ายๆ shift แต่ไปลบตำแหน่งสุดท้าย
//pop
console.log(arr); // [ 'Tus', 'Amorn', 'Mint', 'Nine', 'ST', 'Mick' ]
let pop = arr.pop(); // pop มาจะได้ Mick มาเก็บในตัวแปร pop และลบ Mick
console.log(arr); // [ 'Tus', 'Amorn', 'Mint', 'Nine', 'ST' ]
console.log(pop); // Mick