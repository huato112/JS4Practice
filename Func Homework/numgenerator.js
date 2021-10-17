function number(fn, a= 0, b=2){
    return fn(a, b);
}
function add(a, b) {
    return a + b; 
}
function sub(a, b) {
    return a - b;
}

function numberGenerator(range, range2){ //Func สุ่มเลขตามที่เรากำหนด
    let result = Math.floor(Math.random() * (range2 - range + 1) + range); // สุ่มเลขตาม range ที่เรากำหนด
    return function generate(multiply = 1){  // option เสริมไว้คูณ
        return result*multiply; // คุณกับตัวคูณถ้าเรากำหนดมา
    }
}

export {number, numberGenerator, add, sub} //ทำให้อีกไฟล์นึง import ไปใช้ได้