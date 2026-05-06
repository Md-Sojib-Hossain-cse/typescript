//inheritance

class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numberOfHours: number) {
    console.log(`${this.name} daily ${numberOfHours} ghonta ghumay.`);
  }
}

class Student extends Parent {}

const student1 = new Student("Mr.Fakibaz", 22, "Jene raat one kait");

student1.getSleep(12);

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numberOfClass: number) {
    console.log(`${this.name} ${numberOfClass} ta class ney.`);
  }
}

const teacher1 = new Teacher("Mr.Teacher", 34, "class e", "senior teacher");

teacher1.takeClass(4);
