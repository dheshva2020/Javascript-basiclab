var studentName = "Alex"; // declaring student's name
studentName = "Jordan" //updating the student's name;
var studentName = "Prabu"; // Re-declaring with var is possible

let studentProgram = "CPAN"; // declaring the student's program
studentProgram = "CP"; // Updating the student's program
// let studentProgram = "Web Design"; // Test and see what happens?

const studentID = "N N10005237"; // declaring the  student ID
// studentID = "N987654321"; // Test and see what happens?


console.log(studentName); 
console.log(studentProgram ); 
console.log(studentID ); 
let name = "Prabu";
let age = 45;

// Using template literals for string interpolation
let message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message); // Output: Hello, my name is Prabu and I am 45 years old.  
let isenrolled = true;
console.log(isenrolled);

let firstName = "Prabu";
let middleName = 'Sai';
let lastName = `Elangovan`;

// Number
let distance = 150.5; // a floating-point number

// BigInt 
let largeNumber = 9007199254740991n; // a large integer beyond the safe limit for Number

console.log(distance);
console.log(largeNumber );

let found = true;
let lost = false;
console.log(found);
console.log(lost );

// Creates a new object, person, with two properties, age and name.

let person = {
  firstName: "Prabu",
  lastName: "Elangovan",
  age: 45
};

console.log(person.firstName);

let colors = ['Red', 'Green', 'Blue'];
console.log(colors[0]); // Accesses the first element, output: 'Red'
colors.push('Orange'); // Adds a new element at the end
console.log(colors); // Output: ['Red', 'Green', 'Blue', 'Orange']
colors.pop();
console.log(colors);

console.log(5 * 4); // Multiplication,
console.log(20 / 2); // Division
console.log(13 % 4); // Modulus (Remainder)

console.log(5 + 2); // Addition
console.log(7 - 2); // Subtraction

let x = 10; 
let y = 20;
console.log("10" == y); // Equality
console.log("10" === 3); // Strict equality
console.log(x != y); // Inequality
console.log(x < y); // Less than
console.log(x > y); // Greater than
console.log(x <= y); // Less than or equal to
console.log(x >= y); // Greater than or equal to

let a = false;
let b = true;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR
console.log(!a); // Logical NOT