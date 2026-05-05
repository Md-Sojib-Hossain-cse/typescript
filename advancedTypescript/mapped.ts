//mapped types

//
const arrayOfNumbers: number[] = [1, 2, 3];

const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfStringUsingMap: string[] = arrayOfNumbers.map((number) =>
  number.toString(),
);

type AreaNumbers = {
  height: number;
  width: number;
};

type Height = AreaNumbers["height"];

type AreaOfString = {
  [key in keyof AreaNumbers]: string;
};

type GenericMapped<T> = {
  [key in keyof T]: T[key];
};

const area: GenericMapped<{ height: number; width: number }> = {
  height: 10,
  width: 20,
};
