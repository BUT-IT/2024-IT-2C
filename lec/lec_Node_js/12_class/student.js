class Student {
	constructor(name, grades) {
		this.name = name;
		this.grades = grades; 
	}

	getAverageGrade() {
		return this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length;
	}
}

class Group {
	constructor() {
		this.students = [];  //массив студентов
	}

	addStudent(student) {
		this.students.push(student);
	}

	getGroupMaxGrade() {
		const averages = this.students.map(student => student.getAverageGrade());
		return Math.max(...averages);
	}
	
	isAllStudentsPassed(passingGrade = 3) {
		return this.students.every(student => 
			student.grades.every(grade => grade >= passingGrade)
		);
	}
}


const student1 = new Student("Иван", [4, 5, 3]);
const student2 = new Student("Анна", [2, 3, 4]);
const student3 = new Student("Петр", [5, 5, 4]);

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);

console.log(group.getGroupMaxGrade());
console.log(group.isAllStudentsPassed()); 