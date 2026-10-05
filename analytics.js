// Calculates class average for a specific course ID
export function calculateClassAverage(students, courseId) {
  const courseGrades = students
    .flatMap(student => student.courses)
    .filter(course => course.courseId === courseId)
    .map(course => course.grade);

  if (courseGrades.length === 0) return 0;

  const total = courseGrades.reduce((sum, grade) => sum + grade, 0);
  return total / courseGrades.length;
}

// Finds the student with the highest average grade
export function findTopStudent(students) {
  if (students.length === 0) return null;

  return students.reduce((top, current) => 
    current.getAverage() > top.getAverage() ? current : top
  );
}

// Higher order function filtering students by a given criteria function
export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}