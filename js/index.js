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