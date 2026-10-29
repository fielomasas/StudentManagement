let mockStudentDB = [
    // {
    //     id: 2026100001,
    //     firstName: "Fiel Louis",
    //     lastName: "Omas-as",
    //     email: "fiel.omasas@gmail.com"
    // },
    // {
    //     id: 2026100002,
    //     firstName: "Jane",
    //     lastName: "Doe",
    //     email: "jane.doe@gmail.com"
    // }
];

export function getStudentAPI() {
    return mockStudentDB;
};

export function addStudentAPI(newStudentData) {
    let savedStudent = {
        id: Date.now(),
        firstName: newStudentData.firstName,
        lastName: newStudentData.lastName,
        email: newStudentData.email
    }

    mockStudentDB.push(savedStudent);
    return savedStudent;
}