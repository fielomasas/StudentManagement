import { getStudentAPI, addStudentAPI, removeStudentAPI } from "./api.js";

// Creating an array to store student records
let localStudent = [];

// Selecting the form, table, and confirmation dialog elements
const studentForm = document.querySelector("#studentForm");
const studentTableBody = document.querySelector("#studentTableBody");
const removeStudentDialog = document.querySelector("#removeStudentDialog");
const studentNameToRemove = document.querySelector("#studentNameToRemove");
const cancelRemoveButton = document.querySelector("#cancelRemove");
const confirmRemoveButton = document.querySelector("#confirmRemove");
// Storing the ID of the student awaiting removal confirmation
let studentIDToRemove = null;

// Function to render the student table
const renderTable = (dataArray) => {
    // Clearing the table before rendering updated records
    studentTableBody.replaceChildren();

    // Checking if there are no student records
    if (!dataArray || dataArray.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 5;
        cell.textContent = "No student records found.";
        row.appendChild(cell);
        studentTableBody.appendChild(row);
        return;
    }

    // Creating a table row for each student
    dataArray.forEach((student, index) => {
        const row = document.createElement("tr");
        const rowNumberCell = document.createElement("td");
        const firstNameCell = document.createElement("td");
        const lastNameCell = document.createElement("td");
        const emailCell = document.createElement("td");
        const actionCell = document.createElement("td");
        const removeButton = document.createElement("button");

        rowNumberCell.textContent = index + 1;
        firstNameCell.textContent = student.firstName;
        lastNameCell.textContent = student.lastName;
        emailCell.textContent = student.email;

        removeButton.type = "button";
        removeButton.className = "remove-button";
        removeButton.textContent = "Remove";
        removeButton.setAttribute(
            "aria-label",
            `Remove ${student.firstName} ${student.lastName}`
        );
        removeButton.dataset.studentId = student.id;

        actionCell.appendChild(removeButton);
        row.append(
            rowNumberCell,
            firstNameCell,
            lastNameCell,
            emailCell,
            actionCell
        );
        studentTableBody.appendChild(row);
    });
};

// Function to handle form submission
studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Getting the values from the form fields
    const formData = {
        firstName: document.querySelector("#firstName").value.trim(),
        lastName: document.querySelector("#lastName").value.trim(),
        email: document.querySelector("#email").value.trim()
    };

    if(!formData.firstName || !formData.lastName || !formData.email) {
        alert("Please fill in all fields.");
        return;
    }

    // Adding the student and updating the table
    addStudentAPI(formData);

    localStudent = getStudentAPI();

    renderTable(localStudent);

    studentForm.reset();
});

// Function to handle student removal button clicks
studentTableBody.addEventListener('click', (event) => {
    // Checking if the click target is an HTML element
    if(!(event.target instanceof Element)) {
        return;
    }

    // Finding the clicked remove button
    const removeBtn = event.target.closest(".remove-button");

    if(!removeBtn) {
        return;
    }

    // Getting the student's ID and finding their record
    const studentID = Number(removeBtn.dataset.studentId);
    const student = getStudentAPI().find(
        student => student.id === studentID
    );

    if (!student) {
        return;
    }

    // Showing the confirmation dialog with the selected student's name
    studentIDToRemove = studentID;
    studentNameToRemove.textContent = 
    `${student.firstName} ${student.lastName}`;
    removeStudentDialog.showModal();
});

// Function to cancel student removal
cancelRemoveButton.addEventListener("click", () => {
    removeStudentDialog.close();
});

// Function to confirm student removal
confirmRemoveButton.addEventListener("click", () => {
    // Checking if a student is waiting for confirmation
    if (studentIDToRemove === null) {
        return;
    }

    removeStudentAPI(studentIDToRemove);
    localStudent = getStudentAPI();
    renderTable(localStudent);
    removeStudentDialog.close();
});

// Resetting the selected student ID when the dialog closes
removeStudentDialog.addEventListener("close", () => {
    studentIDToRemove = null;
});

// Function to initialize the application
const initApp = () => {
    localStudent = getStudentAPI();

    renderTable(localStudent);
};

initApp();