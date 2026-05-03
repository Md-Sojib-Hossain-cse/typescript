//Generic function

const createStringArray = (value: string) => [value];

const createNumberArray = (value: number) => [value];

const createObjectArray = (value: { id: number; name: string }) => [value];

const stringArray = createStringArray("Apple");
const numberArray = createNumberArray(2);
const objectArray = createObjectArray({ id: 1, name: "Sojib" });

const createGenericArray = <T>(value: T) => [value];

const genericArray1 = createGenericArray("hi");
const genericArray2 = createGenericArray(2);
const genericArray3 = createGenericArray({ id: 1, name: "Sojib" });

//tuple
const createTupleArray = <X, Y>(x: X, y: Y) => [x, y];

// const addStudentToCourse = <T>(studentInfo: T) => {
//   return {
//     ...studentInfo,
//     course: "Next level",
//   };
// };

// const student1 = {
//   id: 1,
//   name: "sojib",
//   hasPen: true,
// };

// const student2 = {
//   id: 1,
//   name: "sojib",
//   hasCar: true,
//   isMarried: true,
// };

// const result = addStudentToCourse(student1);

// console.log(result);
