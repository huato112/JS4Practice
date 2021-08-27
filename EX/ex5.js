let num = []
let i = 0;
function random(){
    // Math.floor(Math.random() * 101); // 0-100
    num[i] = Math.floor(Math.random() * 100) + 1; //0-99 + 1
    i++;
}
function manu(){
    console.log("1.Find Sum");
    console.log("2.Find Minimum Value");
    console.log("3.Find Maximum Value");
    const input = prompt();
    switch(input){
        case "1":
            let sum = num.reduce(function(a, b){
                return a + b;
            }, 0);
            console.log(sum)
            break;
        case "2":
            console.log(Math.min(...num));
            break;
        case "3":
            console.log(Math.max(...num));
            break;
    }
}