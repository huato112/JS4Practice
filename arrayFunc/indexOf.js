//indexOf(searchElement)
//indexOf(searchElement, fromIndex)
//หา index ของค่าใน array ตัวแรกตามค่าที่ใส่เข้าไป
let arr = [4, 2, 6, 8, 2];
console.log(arr.indexOf(2)); //1

//ลองใส่ fromIndex เพิ่ม
console.log(arr.indexOf(2, 1)); //เริ่มที่ index 1 ans 1
console.log(arr.indexOf(2, 2)); //เริ่มที่ index 2 ans 4
//แสดงว่า fromIndex คือนับตัวนั้นด้วย