function numberGenerator(range = 0, range2 = 2){ //Func สุ่มเลขตามที่เรากำหนด
    return function genarete(multiply = 1){  // option เสริมไว้คูณ
        let result = -1
        result = Math.ceil(Math.random() * (range2 - range + 1) + range - 1 ); // สุ่มเลขตาม range ที่เรากำหนด
        return result*multiply; // คุณกับตัวคูณถ้าเรากำหนดมา
    }
}

export {numberGenerator} //ทำให้อีกไฟล์นึง import ไปใช้ได้