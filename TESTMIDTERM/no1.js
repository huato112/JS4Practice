class Person {
    constructor(idCard, fName, lName){
        this._idCard = idCard;
        this._fName = fName;
        this._lname = lName;
    }
}

class Courses{
    constructor(Person){
        this._nisit = Person;
        this._statusCount = 0;
        this._coursesRegistered = [];
        
    }

    addCourse(courseId, credit, grade, year){
        this._coursesRegistered.push({courseId, credit, grade, year});
    }

    listCourse(year){
        let result = [];
        this._coursesRegistered.forEach((value) => {
            if (year == value.year)
                result.push(value.courseId, value.credit, value.grade, value.year)
        })
        return result;
    }

    listcredit(year){
        let totalcredit = 0.0;
        this._coursesRegistered.forEach((value) => {
            if (year == value.year)
                totalcredit = totalcredit + value.credit
        })
        return totalcredit;
    }

    listcreditt(){
        let totalcredit = 0.0;
        this._coursesRegistered.forEach((value) => {
                totalcredit = totalcredit + value.credit
        })
        return totalcredit;
    }

    listgpax(year){
        let totalgpa = 0.0;
        let a = 0.0;
        this._coursesRegistered.forEach((value) => {
            if (year == value.year)
            a = a + (value.grade * value.credit)
        })

        totalgpa = a / this.listcredit(year);
        console.log(a);
        console.log("^^^แต้มระดับคะแนน")
        return totalgpa;
    }
    listgpaxx(){
        let totalgpa = 0.0;
        let a = 0.0;
        this._coursesRegistered.forEach((value) => {
            a = (value.grade * value.credit) + a
        })
        totalgpa = a / this.listcreditt();
        return totalgpa;
    }

    status(){
        let a = "ปกติ";
        //จริง ๆ น่าจะทำ object วิชาเก็บใน year แต่เวลาไม่ทันแล้ว ทำพลาด
        if (this.listgpax("1/2020") <= 1.99){
            this._statusCount++;
        }
        else if (this.listgpax("2/2020") <= 1.99){
            this._statusCount++;
        }
        else if (this.listgpax("1/2021") <= 1.99){
            this._statusCount++;
        }
        else if (this._statusCount == 4){
            return "retired";
        }
        else {return a;}
    }
}

let amorn = new Person(1100401137331, "Amornpong", "duangchawee");
let amornCourse = new Courses(amorn);

amornCourse.addCourse("GEN101", 1, 4.0, "1/2020");
amornCourse.addCourse("GEN121", 3, 3.5, "1/2020");
amornCourse.addCourse("INT100", 3, 2.5, "1/2020");
amornCourse.addCourse("INT101", 3, 3.5, "1/2020");
amornCourse.addCourse("INT102", 1, 3.5, "1/2020");
amornCourse.addCourse("INT114", 3, 3.5, "1/2020");
amornCourse.addCourse("LNG220", 3, 3.5, "1/2020");

amornCourse.addCourse("LNG332", 3, 3.5, "2/2020");
//console.log(amornCourse.listCourse("1/2020"));
//getGpax();

//console.log(amornCourse.listcredit("1/2020"));
//console.log(amornCourse.listgpax("1/2020"));
//console.log(amornCourse.listgpax("2/2020"));
//console.log(amornCourse.listgpaxx());
////////////
console.log();
console.log("///////////////////////////////")
console.log("ALLYEAR")
console.log("///////////////////////////////")
console.log(amornCourse.listcreditt());
//console.log(amornCourse.listgpaxx());
//console.log(amornCourse.status());