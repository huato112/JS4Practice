// splice : slice ออกมาแล้วเอาค่าไปแทนได้ ทำได้ทั้ง insert, replace, delete
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
//
// start : เริ่มลบตำแหน่งไหน
// deleteCount : ลบกี่ตัว
// itemn : ใส่กี่ตัวก็ได้ แล้วเอา item ไปแทนที่ตำแหน่ง start ไล่ไปเรื่อย

const months = ['Jan', 'March', 'April', 'June'];
let removed = months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

months.splice(20, 5, 'Amorn', 'Tus'); // ถ้า Start มากกว่า length จะ set ให้ start ที่ lenghth แล้วจะไม่มีตัวไหนโดนลบ
//สิ่งที่จะทำคือ Add item เข้าไปตำแหน่งสุดท้ายเฉยๆ
console.log(months); //[ 'Jan', 'Feb', 'March', 'April', 'May', 'Amorn', 'Tus' ]