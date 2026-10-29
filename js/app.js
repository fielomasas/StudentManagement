import { getStudentAPI, addStudentAPI } from "./api.js";

let localStudent = [];

const studentForm = document.querySelector("#studentForm");
const studentTableBody = document.querySelector("#studentTableBody");

// Renders the table
const renderTable = (dataArray) => {
    studentTableBody.innerHTML = "";

    if (!dataArray || dataArray.length === 0) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center">
                    No student records found.
                </td>
            </tr>
        `;
        return;
    }

    let rowsHTML = "";
    dataArray.forEach((student, index) => {
        rowsHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.email}</td>
            </tr>
        `;
    });

    studentTableBody.innerHTML = rowsHTML;
};

// Handles form submission
studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        firstName: document.querySelector("#firstName").value.trim(),
        lastName: document.querySelector("#lastName").value.trim(),
        email: document.querySelector("#email").value.trim()
    };

    if(!formData.firstName || !formData.lastName || !formData.email) {
        alert("Please fill in all fields.");
        return;
    }

    addStudentAPI(formData);

    localStudent = getStudentAPI();

    renderTable(localStudent);

    studentForm.reset();
});

// Initial View
const initApp = () => {
    //localStudent = getStudentAPI();

    renderTable(localStudent);
};

initApp();