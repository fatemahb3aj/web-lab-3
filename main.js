import { fetchStudents } from './database.js';
import { Student } from './models.js';
import { calculateClassAverage, findTopStudent, filterStudents } from './analytics.js';

fetchStudents((students_data) => {
  console.log(students_data);

  // Convert raw objects to Student class instances
  const students = students_data.map(item => new Student(item.id, item.name, item.courses));

  // Testing immutability 
  console.log("\nTesting Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");

  try {
    students[0].id = 999;
  } catch (err) {
  }

  console.log(`Final ID: ${students[0].id} (Success: ID did not change)\n`);

  console.log("--- Analytics Report ---");

  //Class average for Course 101
  const avg101 = calculateClassAverage(students, 101);
  console.log(`Class Average for Course 101: ${avg101.toFixed(2)}`);

  //Top performing student
  const topStudent = findTopStudent(students);
  console.log(`Top Student: ${topStudent.name} (Average: ${topStudent.getAverage().toFixed(1)})`);

  //Filtering students enrolled in Course 102
  const course102Students = filterStudents(students, student =>
    student.courses.some(course => course.courseId === 102)
  );

  const studentNames = course102Students.map(student => student.name).join(", ");
  console.log(`Students in Course 102: ${studentNames}`);
});