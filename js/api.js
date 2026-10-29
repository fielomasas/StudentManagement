// Instantiate a database
let mockStudentDB = [
    {
        id: 2026100001,
        firstName: "Fiel Louis",
        lastName: "Omas-as",
        email: "fiel.omasas@gmail.com"
    },
    {
        id: 2026100002,
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@gmail.com"
    }
];

let studentID = Date.now();

// Function to get the list of students
export function getStudentAPI() {
    return mockStudentDB;
};

// Function to add student
export function addStudentAPI(newStudentData) {
    // Ensures studentID is unique
    while (mockStudentDB.some(student => student.id === studentID)) {
        studentID++;
    }
    let savedStudent = {
        id: studentID,
        firstName: newStudentData.firstName,
        lastName: newStudentData.lastName,
        email: newStudentData.email
    }

    mockStudentDB.push(savedStudent);
    return savedStudent;
}

// Function to remove a student
export function removeStudentAPI(studentIDToBeRemoved) {
    // Finding the index of the student to be removed
    const index = mockStudentDB.findIndex(
        student => student.id === studentIDToBeRemoved);
    
    if (index !== -1) {
        mockStudentDB.splice(index, 1);
    }
}