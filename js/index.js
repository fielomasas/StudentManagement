import { addStudentAPI, getStudentAPI } from "./api.js";

// Test Case 1
console.log("Initial Database:", getStudentAPI());

// Test Case 2
let newStudent = {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@gmail.com"
}

console.log("Return Saved Object:", addStudentAPI(newStudent));

// Test Case 3
console.log("Updated Database:", getStudentAPI());

// Test Case 2
let newStudent1 = {
    firstName: "John1",
    lastName: "Smith",
    email: "john.smith@gmail.com"
}

console.log("Return Saved Object:", addStudentAPI(newStudent1));

// Test Case 3
console.log("Updated Database:", getStudentAPI());

// Test Case 2
let newStudent2 = {
    firstName: "John2",
    lastName: "Smith",
    email: "john.smith@gmail.com"
}

console.log("Return Saved Object:", addStudentAPI(newStudent2));

// Test Case 3
console.log("Updated Database:", getStudentAPI());

// Test Case 2
let newStudent3 = {
    firstName: "John3",
    lastName: "Smith",
    email: "john.smith@gmail.com"
}

console.log("Return Saved Object:", addStudentAPI(newStudent3));

// Test Case 3
console.log("Updated Database:", getStudentAPI());

