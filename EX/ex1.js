let c;
function getValue() {
    var total = document.getElementById('total').value; // รับค้าที่กรอกในช่อง total มาใส่ในตัวแปร total
    var cash = document.getElementById('cash').value;
    var change = document.getElementById('change');
    var sortChange = document.getElementById('sortChange');

    c = cash - total
    change.innerHTML = 'Change: ' + c;
}

function sortBank() {
    let purple = 0;
    let red = 0;
    let blue = 0;
    let green = 0;
    let ten = 0;
    let five = 0;
    let two = 0;
    let one = 0;
    while(c>=500){
        purple++;
        c = c-500;
    }
    while(c>=100){
        red++;
        c = c-100;
    }
    while(c>=50){
        blue++;
        c = c-50;
    }
    while(c>=20){
        green++;
        c = c-20;
    }
    while(c>=10){
        ten++;
        c = c-10;
    }
    while(c>=5){
        five++;
        c = c-5;
    }
    while(c>=2){
        two++;
        c = c-2;
    }
    while(c==1){
        one++;
        c = c-1;
    }
    sortChange.innerHTML = 
    purple + ' FiveHundred bills' + '<br>' +
    red + ' OneHundred bills' + '<br>' +
    blue + ' fifty bills' + '<br>' +
    green + ' twenty bills' + '<br>' +
    ten + ' tenCoins' + '<br>' +
    five + ' fiveCoins' + '<br>' +
    two + ' twoCoins' + '<br>' +
    one + ' oneCoin' + '<br>';
}