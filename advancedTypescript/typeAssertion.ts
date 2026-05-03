//Type assertion

let anything: any;

anything = "SOJIB";

const kgToGramConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    return `${Number(input.split(" ")[0]) * 1000} g`;
  }
};

const result1 = kgToGramConverter(2) as number;
const result2 = kgToGramConverter("2 kg") as string;

console.log(result1);
console.log(result2);
