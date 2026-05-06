//instance of guard

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getSleep(numberOfHours: number) {
    console.log(`${this.name} doinik ${numberOfHours}hr ghumay`);
  }
}

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }

  doStudy(numberOfHours: number) {
    console.log(`${this.name} doinik ${numberOfHours}hr poralekha kore `);
  }
}

class Teacher extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }

  takeClass(numberOfHours: number) {
    console.log(`${this.name} doinik ${numberOfHours}hr class ney `);
  }
}

//function guard

const isStudent = (user: Person) => {
  return user instanceof Student; //true - false
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; //true - false
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(6);
  } else if (isTeacher(user)) {
    user.takeClass(4);
  } else {
    user.getSleep(8);
  }
};

const student1 = new Student("Mr.Student", 22);
const teacher1 = new Teacher("Mr.Student", 22);

getUserInfo(student1);
