export class EnrolledSubject {
    constructor(subject) {
        this._subject = subject;
        this._grade = '-';
    }
    numGrade() {
        let result = '-';
        switch (this._grade) {
            case "A":
                result = 4;
                break;
            case "B+":
                result = 3.5;
                break;
            case "B":
                result = 3;
                break;
            case "C+":
                result = 2.5;
                break;
            case "C":
                result = 2;
                break;
            case "D+":
                result = 1.5;
                break;
            case "D":
                result = 1;
                break;
            case "F":
                result = 0;
                break;
            case "Fa":
                result = 0;
                break;
            case "Fe":
                result = 0;
                break;
        }
        return result;
    }
    get subject() {
        return this._subject;
    }
    get grade() {
        return this._grade;
    }
    set grade(grade) {
        this._grade = grade;
    }
}