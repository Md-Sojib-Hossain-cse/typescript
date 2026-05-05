/*
Task 9: The Wrapper HARD Concepts: Conditional Types 

Scenario: Create a type that acts as a logic gate, returning "Large" for arrays and "Small" for anything else. 

Instructions: 
•  
Create a type DataType<T>. 
•  
If T extends an array, the type should be "Large". •  

Otherwise, it should be "Small". 
Hint: Use the ternary syntax: T extends any[] ? "Large" : "Small". 7

*/

type DataType<T> = T extends any[] ? "Large" : "Small";

type a = DataType<[1, 3]>;
type b = DataType<1>;
