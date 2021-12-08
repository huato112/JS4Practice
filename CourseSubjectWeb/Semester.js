import { EnrolledSubject } from "./EnrolledSubject.js";
import { subjectList } from "./Subject.js";

export class Semester {
    constructor(semesterName) {
        this._semesterName = semesterName;
        this._subjectList = [];
    }
    get semesterName() {
        return this._semesterName;
    }
    get subjectList() {
        return this._subjectList;
    }

    getSubject(subjectID) {
        return this._subjectList.find(subjectFind =>
            subjectFind.subject.subjectId == subjectID
        );
    }

    addSubject(...subjectId) {
        subjectId.forEach((eachSubjectId) =>
            this._subjectList.push(new EnrolledSubject(subjectList.findSubjectById(eachSubjectId)))
        );
    }
    allDegree() {
        return this._subjectList.reduce((prev, cur) => prev + cur.subject.degree);
    }

    calDegree() {
        return this._subjectList.filter(subj => subj.numGrade() != '-')
            .reduce((prev, cur) => prev + cur.subject.degree, 0);
    }

    totalScore() {
        return this._subjectList.filter((subj) => subj.numGrade() != '-')
            .reduce((prev, cur) => prev + cur.numGrade() * cur.subject.degree, 0);
    }

    getGPA() {
        return this.totalScore / this.calDegree;
    }
    getDegree() {
        return this._subjectList.filter(subj => subj.grade.include(['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'S']))
            .reduce((prev, cur) => prev + cur.numGrade(), 0);
    }


}