//type guard

//typeof

const add = (
  number1: number | string,
  number2: number | string,
): number | string => {
  const result =
    typeof number1 === "number" && typeof number2 === "number"
      ? number1 + number2
      : number1.toString() + number2.toString();

  return result;
};

console.log(add(2, 3));
console.log(add(2, "3"));

//in guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`This is ${user.name} and his role is : ${user.role}`);
  } else {
    console.log(`This is ${user.name}`);
  }
};

getUserInfo({ name: "normal" });
getUserInfo({ name: "admin", role: "admin" });
