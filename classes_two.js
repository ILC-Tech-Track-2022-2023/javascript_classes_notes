
class Person{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
}

class Student extends Person{
    constructor(name, id, major, year){
        super(name, id);
        this.major = major;
        this.year = year;
    }
}
class Instructor extends Person{
    constructor(name, id, subject){
        super(name, id);
        this.subject = subject;
    }
}

class Classroom{
    /**
     * Creates a new class
     * @param {String} name - The name of the class
     * @param {String} id - The id of the class
     * @param {Student[]} students - The students of the class
     * @param {Instructor} instructor - The instructor of the class
     */
    constructor(name, id, students, instructor){
        this.name = name;
        this.id = id;
        this.students = students;
        this.instructor = instructor;
    }
    /**
     * 
     * @param {Student} student - A student to be added to the class
     */
    addStudent(student){
        this.students.push(student);
    }
    courseToString(){
        return `${this.name} is taught by ${this.instructor.name}`
    }
}

let instructor = new Instructor("Sanderson", 395185, "ECON");
let student1 = new Student("Ishi Sood", 190224, "Computer Science", 2025)
let micro = new Classroom("Intro into Microeconomics", "10000", [], instructor);
micro.addStudent(student1)
micro.students[0].name = "Yoonah Chang"
console.log(micro.students)












