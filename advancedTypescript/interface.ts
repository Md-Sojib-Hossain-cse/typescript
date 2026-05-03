//interface : object type : array , object , function

type TUser = {
  name: string;
  age: number;
};

type TRole = {
  role: "admin" | "user";
};

type TUserWithRole = TUser & TRole;

interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: TUserWithRole = {
  name: "SOJIB",
  age: 23,
  role: "admin",
};

const user2: IUser = {
  name: "Hossain",
  age: 24,
};

type TIsAdmin = boolean;

const isAdmin: TIsAdmin = true;

//function

type TAdd = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

//array
type TFriends = string[];

interface IFriends {
  [index: number]: string;
}

// const friends: IFriends = ["A", "B", "C"];
