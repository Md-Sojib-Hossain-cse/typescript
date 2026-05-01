type TUser = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "Male" | "Female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: TUser = {
  id: "abc",
  name: {
    firstName: "MD SOJIB",
    lastName: "HOSSAIN",
  },
  gender: "Male",
  contactNo: "+8801906479901",
  address: {
    division: "Dhaka",
    city: "Narayangonj",
  },
};

const user2: TUser = {
  id: "abc",
  name: {
    firstName: "MR",
    lastName: "X",
  },
  gender: "Male",
  contactNo: "+8801906479901",
  address: {
    division: "Dhaka",
    city: "Narayangonj",
  },
};

type AddFunc = (num1: number, num2: number) => number;

const addTwo: AddFunc = (num1, num2) => {
  return num1 + num2;
};
