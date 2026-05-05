/*
Task 1: The "Optional" Shopping Cart EASY Concepts: Destructuring, Optional Properties, Default Values 

Scenario: You are building a checkout system. Users might buy one item by default, or specify a bulk quantity. 

type CartItem = { 
 name: string; 
 price: number; 
 quantity?: number; 
}; 

Instructions: 
•  
Write a function calculateTotal that takes a CartItem object. 
•  
Use Destructuring to extract properties. 
•  
If quantity is missing, ensure the calculation treats it as 1. •  
Return the total cost (price * quantity). 

Hint: Set a default value during destructuring: { quantity = 1 } = item. 1

 */

type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

const cartItem = {
  name: "Test",
  price: 12,
};

const cartItem2 = {
  name: "Test",
  price: 12,
  quantity: 2,
};

const calculateTotal = (cartItem: CartItem) => {
  const { price, quantity = 1 } = cartItem;

  return { totalCost: price * quantity };
};

console.log(calculateTotal(cartItem));
console.log(calculateTotal(cartItem2));
