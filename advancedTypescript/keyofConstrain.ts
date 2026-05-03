//keyof : type operator

type TRichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type TMyVehicle = "car" | "bike" | "cng";

type TMyVehicle2 = keyof TRichPeoplesVehicle;

const myVehicle: TMyVehicle2 = "bike";

type TUser = {
  id: number;
  name: string;
  address: {
    city: string;
    district: string;
  };
};

const user: TUser = {
  id: 2,
  name: "Mr.x",
  address: {
    city: "uttora",
    district: "dhaka",
  },
};

const myName = user.name;
const myId = user["id"];
const myAddress = user["address"];

// console.log({ myName, myId, myAddress });

const getPropertyFromObject = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const result = getPropertyFromObject(user, "name");

console.log({ result });
