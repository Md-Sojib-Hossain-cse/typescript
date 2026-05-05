/* 
Task 8: The "Draft" Mode HARD Concepts: Mapped Types, Readonly, Optional 
Scenario: Transform a strict interface into a "Draft" version where everything is optional and immutable. 


interface MyDocument { 
 title: string; 
 content: string; 
 author: string; 
} 

Instructions: 
•  
Create a Mapped Type Draft<T>. 
•  
Iterate through all keys of T, making them readonly and ? (optional). •  
Declare a variable myDraft of type Draft<MyDocument>. 
Hint: { readonly [P in keyof T]?: T[P] }. 

*/

interface MyDocument {
  title: string;
  content: string;
  author: string;
}

type Draft<T> = {
  readonly [K in keyof T]?: T[K];
};

type TDraft = Draft<MyDocument>;
