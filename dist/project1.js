"use strict";
// project 1: student-profile with types
const student1 = {
    name: "Skyy",
    age: 29,
    isEnrolled: true,
    courses: ["JS", "TS", "ReactJs"],
    scores: [88, 92, 96],
    info: ["Skyy", 29, true], //tuple
};
// display the info
function displayStudentInfo(student) {
    console.log(`\nName: ${student.name}\n Age: ${student.age}\n Courses:${student.courses.join(", ")}\n`);
}
displayStudentInfo(student1);
