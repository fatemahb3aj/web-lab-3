export class Student {
  constructor(id, name, courses = []) {
    //Readnonly student ID property descriptor
    Object.defineProperty(this, 'id', {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });

    this.name = name;
    this.courses = courses;
  }

  //Adds a course object to the students record
  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  //Calculates average grade
  getAverage() {
    if (this.courses.length === 0) return 0;
    const total = this.courses.reduce((sum, course) => sum + course.grade, 0);
    return total / this.courses.length;
  }
}
