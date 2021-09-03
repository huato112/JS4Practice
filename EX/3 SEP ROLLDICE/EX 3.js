let howManyGames = 5;
let player1 = { name: "alice", roll: [], result: [], wincount: 0 };
let player2 = { name: "bob", roll: [], result: [], wincount: 0 };
let count = 0;
let dice = {
  roll: function () {
    return Math.floor(Math.random() * 6) + 1;
  },
}; //

function gameResult(roll1, roll2) {
  if (roll1 > roll2) {
    player1.result[count] = "WIN";
    player2.result[count] = "LOSE";
    player1.wincount++;
  } else if (roll1 < roll2) {
    player1.result[count] = "LOSE";
    player2.result[count] = "WIN";
    player2.wincount++;
  } else {
    player1.result[count] = "DRAW";
    player2.result[count] = "DRAW";
  }
  player1.roll[count] = roll1;
  player2.roll[count] = roll2;
  count++;
}

function getWin(p1,p2) {
  if (p1 > p2) {
    return "Player 1 Win";
  } else if (p1 < p2) {
    return "Player 2 Win";
  } else {
    return "Draw";
  }
}

while (howManyGames > 0) {
  howManyGames--;
  gameResult(dice.roll(), dice.roll());
}

console.log(player2);
console.log(player1);
console.log(getWin(player1.wincount,player2.wincount));