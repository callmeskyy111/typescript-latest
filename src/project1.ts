// project 1: student-profile with types

type StudentType = {
  //use CAPS. for naming
  name: string;
  age: number;
  isEnrolled: boolean;
  courses: string[];
  scores: number[];
  info: [string, number, boolean];
};

const student1: StudentType = {
  name: "Skyy",
  age: 29,
  isEnrolled: true,
  courses: ["JS", "TS", "ReactJs"],
  scores: [88, 92, 96],
  info: ["Skyy", 29, true], //tuple
};

// display the info
function displayStudentInfo(student: StudentType): void {
  console.log(
    `\nName: ${student.name}\n Age: ${
      student.age
    }\n Courses:${student.courses.join(", ")}\n`
  );
}

displayStudentInfo(student1);
