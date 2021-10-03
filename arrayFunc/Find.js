console.log('//////////////////////////// find /////////////////////////');
//Find 
//find((element) => { ... } )
//find((element, index) => { ... } )
//find((element, index, array) => { ... } )
//คล้ายๆ forEach
//element : ค่าต่างใน array ต่อ 1 ลูปเหมือนกับ forEach
//index : index ของค่าตัวนั้นๆ
//array : array ที่เราเอามาหาอะแหละทั้งก้อนเลย

let arrObj = [{ name: 'Tus', Age: 20 }, { name: 'Mint', Age: 21 }]

let find = arrObj.find((value) => 'Tus' === value.name)
console.log(find);

////////////////////////////////////////////////////////////////
console.log('///////////////////////// find index ///////////////////////');
////////////////////////////////////////////////////////////////

// findIndex หา index ของ data ใน array ที่ตรงเงื่อนไขที่เราต้องการ 
// คล้ายๆกับ find แต่ return index แทน
//findIndex((element) => { ... } )
//findIndex((element, index) => { ... } )
//findIndex((element, index, array) => { ... } )

let index = arrObj.findIndex((value) => 'Mint' === value.name)
console.log(index);