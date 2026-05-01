//Function
//Arrow function - Normal function

function addTwo(num1: number, num2: number): number {
  return num1 + num2;
}

const addThree = (num1: number, num2: number, num3: number): number => {
  return num1 + num2 + num3;
};

addTwo(2, 2);

addThree(2, 2, 3);

//object -> function -> method

const poorUser = {
  name: "sojib",
  balance: 0,
  addBalance(value: number): number {
    return (this.balance = this.balance + value);
  },
};

console.log(poorUser.addBalance(100));

//loop -> function -> callback function
const arr: number[] = [2, 3, 4];

const sqrtElem = arr.map((elem: number): number => {
  return elem * elem;
});

console.log(sqrtElem);
