let mockStudentDB = [];

// FUnction to get the list of students
export function getStudentAPI() {
    return mockStudentDB;
};

// Function to add student
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

// Function to remove a student
export function removeStudentAPI(studentIDToBeRemoved) {
    // Finding the index of the student to be removed
    const index = mockStudentDB.findIndex(
        student => student.id === studentIDToBeRemoved);
    
    if (index !== -1) {
        mockStudentDB.splice(index, 1);
    }
}