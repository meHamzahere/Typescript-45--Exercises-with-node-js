// Define Variable
var apple = "apple";
var uppercaseApple = "Apple";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// Test for equality and in equality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
//Tests using lowercase function
console.log("\n Is apple is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is apple is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical test
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
//Not Equal to 
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\n Is twenty is less than 10?");
console.log(twenty < 10);
// Greater than or equal to 
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to 
console.log("\n Twenty is less than or equal to 10?");
console.log(twenty <= 10);
// Tests using "and" & "or" operators
// Using &&
console.log("\n twenty is not equal to 10 and twent is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twent is greater than 30");
console.log(twenty != 10 && twenty > 30);
// Using || (or)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
console.log("\n20 Is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether item is include in array
console.log("Is orange include in my Fruits array");
console.log(fruits.includes("orange"));
// Not inculde
console.log("\n Is orange not include in my fruits array");
console.log(!fruits.includes("orange"));
