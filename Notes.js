// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const deleteInput = studentForm["button2"];

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name) => {
  students.push({
    name
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name,};
};

const createStudentElement = ({ name}) => {

  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");

  // Fill the content
  studentName.innerText = "• " + name;

  // Add to the DOM
  studentDiv.append(studentName);
  studentsContainer.appendChild(studentDiv);
  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();
  const newStudent = addStudent(
    nameInput.value
  );

  createStudentElement(newStudent);
  nameInput.value = "";
};