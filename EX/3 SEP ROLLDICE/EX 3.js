let howManyGames = 5;
let player1 = {name: "alice", roll: [], result: [] };
let player2 = {name: "bob", roll: [], result: [] };
let count = 0;
let dice = {roll:function(){return Math.floor(Math.random() * 6) + 1}} // 

function gameResult(roll1,roll2){

    if(roll1 > roll2){
        player1.result[count] = "WIN";
        player2.result[count] = "LOSE";
    }
    else if(roll1 < roll2){
        player1.result[count] = "LOSE";
        player2.result[count] = "WIN";
    }
    else{
        player1.result[count] = "DRAW";
        player2.result[count] = "DRAW";
    }
    player1.roll[count] = roll1;
    player2.roll[count] = roll2;
    count++;
}
    while (howManyGames > 0){
        howManyGames--;
        gameResult(dice.roll(),dice.roll());
    }

console.log(player2);
console.log(player1);