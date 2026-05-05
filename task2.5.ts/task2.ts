/*
Task 2: Merging User Profiles EASY Concepts: Intersection Types (&) 

Scenario: A user signs up as a basic Person, but when hired, they gain  JobDetails. An Employee is a union of both. 

type Person = { name: string; age: number }; 

type JobDetails = { role: string; salary: number }; 


Instructions: 
•  
Create a new type Employee that combines Person and JobDetails. •  
Write a function getProfile that accepts an Employee. 
•  
Return a string: "Name: [name], Role: [role]". 
Hint: Use the & operator to merge the two types. 

 */

type Person = { name: string; age: number };

type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

const employee1 = {
  name: "Mr.x",
  age: 22,
  role: "Manager",
  salary: 25000,
};

const employee2 = {
  name: "Mr.x",
  role: "Manager",
  salary: 25000,
};

const getProfile = (employee: Employee) => {
  const { name, role } = employee;
  return `Name: ${name}, Role: ${role}`;
};

console.log(getProfile(employee1));
// console.log(getProfile(employee2));
