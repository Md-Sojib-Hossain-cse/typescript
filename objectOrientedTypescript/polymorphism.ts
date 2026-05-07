//polymorphism : bohurupi

class Person {
  getSleep(): void {
    console.log(`I am a normal happy person,I sleep for 8 hours.`);
  }
}

class Student extends Person {
  getSleep(): void {
    console.log("I am a student , I sleep for 7 hours.");
  }
}

class NextLevelDeveloper extends Person {
  getSleep(): void {
    console.log("I am a next level developer , I sleep for 6 hours.");
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const circle = new Circle(12);
const rectangle = new Rectangle(12, 12);

getArea(circle);
getArea(rectangle);
