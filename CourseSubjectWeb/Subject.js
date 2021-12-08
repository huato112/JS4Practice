export const subjectList = {
    "subject": [{
            "subjectId": "GEN101",
            "degree": 1,
        },
        {
            "subjectId": "GEN121",
            "degree": 3
        },
        {
            "subjectId": "INT100",
            "degree": 3
        },
        {
            "subjectId": "INT101",
            "degree": 3
        },
        {
            "subjectId": "INT102",
            "degree": 1
        },
        {
            "subjectId": "INT114",
            "degree": 3
        },
        {
            "subjectId": "LNG220",
            "degree": 3
        },
        ////////Term2//////////////
        {
            "subjectId": "GEN111",
            "degree": 3,
        },
        {
            "subjectId": "INT103",
            "degree": 3
        },
        {
            "subjectId": "INT104",
            "degree": 3
        },
        {
            "subjectId": "INT105",
            "degree": 1
        },
        {
            "subjectId": "INT107",
            "degree": 3
        },
        {
            "subjectId": "INT200",
            "degree": 1
        },
        {
            "subjectId": "LNG332",
            "degree": 3
        },
        /////////2/2563/////////
        {
            "subjectId": "GEN231",
            "degree": 3,
        },
        {
            "subjectId": "INT201",
            "degree": 2
        },
        {
            "subjectId": "INT202",
            "degree": 2
        },
        {
            "subjectId": "INT205",
            "degree": 3
        },
        {
            "subjectId": "INT207",
            "degree": 3
        },
        {
            "subjectId": "INT214",
            "degree": 3
        },
        {
            "subjectId": "LNG202",
            "degree": 1
        }
    ],

    findSubjectById(sId) {

        return this.subject.find((subj) => subj.subjectId === sId);
    },
}