// ?: Ternary operator - decision making
//?? nullish coalescing operator  - null/undefined
// ?. optional chaining

const isEligible = (age: number) => {
  if (age >= 21) {
    console.log("You're eligible.");
  } else {
    console.log("You're not eligible.");
  }

  const result = age >= 21 ? "You're eligible" : "You're not eligible.";

  console.log(result);
};

isEligible(21);

const userTheme = undefined;

const selectedTheme = userTheme ?? "Light";

console.log(selectedTheme);

const isAuthenticated = "";

const isAuthenticatedUser = isAuthenticated ? isAuthenticated : "Guest user!";
const isAuthenticatedUserNullish = isAuthenticated ?? "Guest user!";

console.log({ isAuthenticatedUser }, { isAuthenticatedUserNullish });

const user: {
  city: string;
  town: string;
  postalCode?: string;
} = {
  city: "dhaka",
  town: "uttora",
};

const postalCode = user?.postalCode;

console.log(postalCode)
