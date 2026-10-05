const students_data=[
  { id: 1, name: "Ali", courses: [{ courseId: 101, grade: 90 }, { courseId: 102, grade: 85 }] },
  { id: 2, name: "Zeynep", courses: [{ courseId: 101, grade: 70 }, { courseId: 102, grade: 95 }] },
  { id: 3, name: "Ahmet", courses: [{ courseId: 101, grade: 60 }, { courseId: 102, grade: 55 }] }
]

function fetchStudents(callback) {
  console.log("Fetching studdents...");
  setTimeout(() => {
    callback(students_data);
  }, 2000)
}

export { fetchStudents };