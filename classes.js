class Classroom{
    /**
     * Creates a new class
     * @param {String} name - The name of the class
     * @param {String} id - The id of the class
     * @param {String[]} students - The students of the class
     * @param {String} instructor - The instructor of the class
     */
    constructor(name, id, students, instructor){
        this.name = name;
        this.id = id;
        this.students = students;
        this.instructor = instructor
    }
    /**
     * 
     * @param {String} student - A student to be added to the class
     */
    addStudent(student){
        this.students.push(student);
        console.log(`${student} was added to the class`);
    }
    courseToString(){
        return `${this.name} is taught by ${this.instructor}`
    }
}

let micro = new Classroom("Intro into Microeconomics", "10000", [], "Sanderson");
console.log(micro);
micro.addStudent("Ishi Sood")

console.log(micro.courseToString());












