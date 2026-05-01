//array destructuring
//object destructuring

const user = {
  id: "123",
  name: {
    firstName: "MD",
    middleName: "SOJIB",
    lastName: "HOSSAIN",
  },
  gender: "male",
  age: 24,
};

const userMiddleName = user.name.middleName;
const userAge = user.age;

const {
  age: myAge,
  name: { middleName },
} = user;

console.log(myAge);
console.log(middleName);

const friends = ["mahin", "sakib", "sumu"];

const [bestFriend, , bon] = friends;

console.log(bestFriend);
console.log(bon);
