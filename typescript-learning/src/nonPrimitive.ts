//array - object

//TS: tuple

let bazarList: string[] = ["eggs", "milk", "sugar"];

bazarList.push("onion");

let mixedArray: (string | number)[] = ["apple", 12, "milk", 10];

mixedArray.push(12);
mixedArray.push("orange");

let coordinate: [number, number] = [20, 20];

let couple: [string, string] = ["Husband", "Wife"];

let nameAndRole: [string, number] = ["Name", 10];

let destination: [string, string, number] = ["dhaka", "dhaka", 3];

//reference type : object

const user: {
  readonly firstName: string; // access modifier
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
  organization: "Programming Hero"; //literal type
} = {
  firstName: "MD",
  middleName: "Sojib",
  lastName: "Hossain",
  isMarried: false,
  organization: "Programming Hero",
};

// user.firstName = "ariful";

console.log(user);
