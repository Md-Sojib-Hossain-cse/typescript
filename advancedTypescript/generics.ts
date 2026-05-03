//dynamically generalized - Generic

type TGenericArray<T> = Array<T>;

// const friends: string[] = ["Mr.x", "Mr.Y", "Mr.z"];
const friends: TGenericArray<string> = ["Mr.x", "Mr.Y", "Mr.z"];

// const rollNumbers: number[] = [2, 3, 5];
const rollNumbers: TGenericArray<number> = [2, 3, 5];

// const isEligible: boolean[] = [true, false, true];
const isEligible: TGenericArray<boolean> = [true, false, true];

type TCoordinates<X, Y> = [X, Y];
const coordinates: TCoordinates<number, number> = [20, 30];
const coordinates2: TCoordinates<string, string> = ["20", "20"];

const userList: TGenericArray<{ name: string; age: number }> = [
  {
    name: "Mr.x",
    age: 22,
  },
  {
    name: "Mr.Y",
    age: 25,
  },
];
