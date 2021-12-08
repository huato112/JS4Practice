import { Semester } from "./semester.js";
import { SemesterRepository } from "./SemesterRepository.js";

export class Student {
    constructor(name, id) {
        this._name = name;
        this._id = id;
        this._semesterList = new SemesterRepository();
    }
    get semesterList() {
        return this._semesterList;
    }
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    getStudentStatus() {
        this._semesterList.getStudentStatus();
    }

}