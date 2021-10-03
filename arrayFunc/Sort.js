//sort ก็เรียงลำดับอะ

// Functionless
//sort()

// Arrow function
//sort((firstEl, secondEl) => { ... } )

// Compare function
//sort(compareFn)

// Inline compare function
//sort(function compareFn(firstEl, secondEl) { ... })

console.log('///////////////////// Functionless ///////////////////////');
//////////////////////////////////////////////////////////////

let arr = [2, 9, 5, 7, 3];
arr.sort(); //เรียงปกจากน้อยไปมาก
console.log(arr) // [ 2, 3, 5, 7, 9 ]

//////////////////////////////////////////////////////////////
console.log('///////////////////// Arrow function ///////////////////////');
//////////////////////////////////////////////////////////////

let arrObj = [{ name: 'Tus', age: 25 }, { name: 'Mint', age: 21 }, { name: 'Nine', age: 5 }, { name: 'Amorn', age: 32 }];;
//จะเรียง obj เราไม่รู้ว่ามันจะเรียงยังไงเลยต้องใช้แบบ function ทำ คล้ายๆ java
arrObj.sort((e1, e2) => e1.age - e2.age);
// e1,e2 : ตัวที่จะเอามาเทียบ เหมือนตอนทำ comparator compare ใน java อะ
// ค่าที่จะ return ใน function มี 3 แบบ
// เป็นบวก คือ e1 > e2
// 0 คือ เท่ากัน
// เป็นลบ คือ e1 < e2
console.log(arrObj);

//////////////////////////////////////////////////////////////
console.log('///////////////////// Compare function ///////////////////////');
//////////////////////////////////////////////////////////////

// ลองแบบ compare function
// แบบแรก
function compare1(e1, e2) {
    if (e1.age > e2.age) return 1;
    else if (e2.age > e1.age) return -1;
    else return 0;
}
// แบบ 2
function compare2(e1, e2) {
    return e1.age - e2.age;
}
//เล่นแบบ 1
arrObj = [{ name: 'Tus', age: 25 }, { name: 'Mint', age: 21 }, { name: 'Nine', age: 5 }, { name: 'Amorn', age: 32 }];
arrObj.sort(compare1)
console.log(arrObj);
//เล่นแบบ 2
arrObj = [{ name: 'Tus', age: 25 }, { name: 'Mint', age: 21 }, { name: 'Nine', age: 5 }, { name: 'Amorn', age: 32 }];
arrObj.sort(compare2);
console.log(arrObj);

//////////////////////////////////////////////////////////////
console.log('///////////////////// Inline function ///////////////////////');
//////////////////////////////////////////////////////////////

arrObj = [{ name: 'Tus', age: 25 }, { name: 'Mint', age: 21 }, { name: 'Nine', age: 5 }, { name: 'Amorn', age: 32 }];
arrObj.sort(function(e1, e2) { //คล้ายๆเดิมอะแค่เปลี่ยน syntax เขัยน function ลงไปเลย
    return e1.age - e2.age;
});
console.log(arrObj);