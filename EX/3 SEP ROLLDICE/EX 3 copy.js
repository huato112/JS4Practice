let player1 = {name:'p1', score:[], result:[],wincount:0}; //OBJECT ชื่อ Player1 เก็บค่าต่าง ๆ 
let player2 = {name:'p2', score:[], result:[],wincount:0}; //OBJECT ชื่อ Player2 เก็บค่าต่าง ๆ 
let winner;
const DIE = 6;
let dice = {roll:function(player){return Math.floor(Math.random()*DIE)+1}}; //OBJECT ชื่อ dice เก็บ FUNCTION ชื่อ roll ไว้สุ่มเลข 1-6

function diceGame(p1name,p2name,round){
    player1 = new Object(player1) //สร้าง Object ชื่อ player1
    player1.name = p1name;
    player1.wincount=0;
    player2 = new Object(player2) //สร้าง Object ชื่อ player2
    player2.name = p2name;
    player2.wincount=0;
    let count=0;

    //roll a dice,loop for round
    //loop ธรรมดาคนแพ้คนชนะจากที่สุ่มได้ คนชนะ + แต้มเก็บไว้ใน wincount
    for(count;count<round;count++){
        
        player1.score[count]=dice.roll(player1)
        
        player2.score[count]=dice.roll(player2)
        
        if(player1.score[count]>player2.score[count]){
            player1.result[count]='Win';
            player1.wincount++;
            player2.result[count]='Lose';
            }
            else if(player1.score[count]<player2.score[count]){
                player1.result[count]='Lose';
                player2.result[count]='Win';
                player2.wincount++;
            }
            else if(player1.score[count]==player2.score[count]){
                player1.result[count]='Draw';
                player2.result[count]='Draw';
            }
            
    }
    
    //winner
    //wincount เยอะสุดชนะ 
    if(player1.wincount>player2.wincount){return winner=player1.name}
        else if(player1.wincount<player2.wincount){return winner=player2.name}
        else if(player1.wincount==player2.wincount){return winner='No winner, the game is Draw'} 
     
}
      
    diceGame('Alice','Bob',2)
    console.log(player1)
    console.log(player2)
    console.log('Winner : '+ winner)
    console.log('-------------------------------------')
    diceGame('Carls','Peter',3)
    console.log(player1)
    console.log(player2)
    console.log('Winner : '+ winner)
    console.log('-------------------------------------')
    diceGame('Henry','Richard',4)
    console.log(player1)
    console.log(player2)
    console.log('Winner : '+ winner)
    console.log('-------------------------------------')