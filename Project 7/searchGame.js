const gameStore = document.querySelectorAll("#Game");
const searchclick = document.getElementById("searchbtn");
searchclick.addEventListener("click", () => {
  searchGame(document.getElementById("search").value)
}, false);

function searchGame(e) {
  const text = e.toLowerCase();
  for (let i = 0; i < gameStore.length; i++) {
    let gameName = gameStore[i].getAttribute("Name");
    if (gameName.toLowerCase().indexOf(text) > -1) {
      gameStore[i].style.display = "";
    } else {
      gameStore[i].style.display = "none";
    }
  }
}