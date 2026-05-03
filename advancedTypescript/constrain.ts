//Constrain - strict rules deya

type TStudent = {
  name: string;
  id: number;
};

const addStudentToCourse = <T extends TStudent>(studentInfo: T) => {
  return {
    ...studentInfo,
    course: "Next level",
  };
};

const student1 = {
  id: 1,
  name: "sojib",
  hasPen: true,
};

const student2 = {
  id: 2,
  name: "sojib",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id: 3,
  name: "sojib",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);
const result3 = addStudentToCourse(student3);

console.log(result);
