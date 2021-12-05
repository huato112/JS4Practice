const gameStore = document.querySelectorAll("#Game"); //เลือก ID ที่เป็น Game ทั้งหมด
const searchclick = document.getElementById("searchbtn"); //ดึง tag html ที่มี id ที่กำหนดมาอยู่ใน js

searchclick.addEventListener("click", () => {
  searchGame(document.getElementById("search").value) //เรียกข้อมูลในช่อง searchbar มาใส่ใน function searchgame
}, false); //เป็นการดักจับ ถ้าคลิกตรงแถบเสริชจะเรียกการทำงานของ function searchGame

function searchGame(e) {
  const text = e.toLowerCase(); //ป้องกัน case sensitive เวลาลูกค้า input ข้อมูลมา
  for (let i = 0; i < gameStore.length; i++) {
    let gameName = gameStore[i].getAttribute("Name");
    if (gameName.toLowerCase().indexOf(text) > -1) { //ถ้าไม่เจอ indexOf จะ return มาเป็น -1
      gameStore[i].style.display = ""; //ถ้าตรงกับที่เรา search จะแสดงหน้าต่างเกมขึ้นมา
    } else {
      gameStore[i].style.display = "none"; //ถ้าเงื่อนไขไม่ตรงเลยจะไม่แสดงเพราะ none
    }
  }
}