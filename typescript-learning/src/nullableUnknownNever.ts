// nullable type

const getUser = (input: string | null) => {
  if (input) {
    console.log(`User ${input} found from database!`);
  } else {
    console.log("All user from db");
  }
};

getUser("abc");

//unknown

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
    return discountedPrice;
  } else if (typeof input === "string") {
    const discountedPrice = Number(input.split(" ")[0]) * 0.1;
    console.log(discountedPrice);
    return discountedPrice;
  } else {
    console.log("Wrong input");
    return;
  }
};

discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);

//void
const throwErr = (msg: string): never => {
  throw new Error(msg);
};

throwErr("Error...");
