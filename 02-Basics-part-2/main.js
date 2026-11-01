"use strict";
/*
// Define variable without let, const, var
score = 100;
console.log(score);

// Typo mistake

let adult = false;
let age = 18;

if (age >= 18) adul = true;

if (adult) console.log("You can drink 🍷");
*/

// ===============================================

// Functions

/*
function sayHello() {
  console.log("Hello world!");
}

// invoke - call - run
sayHello();

function showProfile(name, birthYear) {
  const age = 2026 - birthYear;
  const profile = `My name is ${name} and i'm ${age} years old.`;
  return profile;
}

const info = showProfile("Sara", 1990);
console.log(info);
console.log(showProfile("David", 2006));
*/

/*
// Function Declaration
function calculateDiscount(price) {
  return price * 0.8;
}

const price1 = calculateDiscount(500);

// Function Expression
const calculateDiscount2 = function (price) {
  return price * 0.8;
};

const price2 = calculateDiscount2(500);

console.log(price1, price2);
*/

/*
// Arrow Functions
const calculateDiscount3 = (price) => price * 0.8;

const price3 = calculateDiscount3(500);
console.log(price3);

// more than 1 line and 1 parameter
const showProfile = (name, birthYear) => {
  const age = 2026 - birthYear;
  const profile = `My name is ${name} and i'm ${age} years old.`;
  return profile;
};

console.log(showProfile("Jack", 2009));
*/

// Functions calling other functions
/*
function processOrder(price, discountPercent, shippingCost) {
  // Calculate discount
  const discount = (price * discountPercent) / 100;

  // Calculate final price
  const discountedPrice = price - discount;

  // Calculate total cost
  const total = discountedPrice + shippingCost;

  // Print invoice
  console.log("----- INVOICE -----");
  console.log(`Original Price: $${price}`);
  console.log(`Discount: $${discount}`);
  console.log(`Shipping: $${shippingCost}`);
  console.log(`Total: $${total}`);
  console.log("-------------------");
}

processOrder(200, 15, 10);
*/

/*

function calculateDiscount(price, discountPercent) {
  return (price * discountPercent) / 100;
}

function calculateFinalPrice(price, discount) {
  return price - discount;
}

function calculateTotal(price, shippingCost) {
  return price + shippingCost;
}

function printInvoice(price, discount, shippingCost, total) {
  console.log("----- INVOICE -----");
  console.log(`Original Price: $${price}`);
  console.log(`Discount: $${discount}`);
  console.log(`Shipping: $${shippingCost}`);
  console.log(`Total: $${total}`);
  console.log("-------------------");
}

function processOrder(price, discountPercent, shippingCost) {
  const discount = calculateDiscount(price, discountPercent);
  const discountedPrice = calculateFinalPrice(price, discount);
  const total = calculateTotal(discountedPrice, shippingCost);

  printInvoice(price, discount, shippingCost, total);
}

processOrder(200, 15, 10);

// Reasons to seprate functions:
// 1. Readability: Makes code easier to read and understand.
// 2. Reusability: Allows us to reuse functions without repeating code.
// 3. Maintainability: Makes code easier to update and fix.
// 4. Single Responsibility: Each function should do one specific task.
// 5. Testing: Makes it easier to test and debug each function independently.
*/

// ===============================================

// Arrays

/*
const student1 = "Luna";
const student2 = "Ethan";
const student3 = "Julian";

const students = ["Luna", "Ethan", "Julian"];
console.log(students);

console.log(students[0]);
console.log(students[2]);

console.log(students.length);

students[1] = "Kai";
console.log(students);

// students = ["Theodore", "Sebastian"];

// Bad Way
const ages = new Array(20, 15, 32, 17);
console.log(ages);
*/

// Array Methods
/*
const students = ["Luna", "Ethan", "Julian"];
// Adding
const newLength = students.push("Edward");
console.log(students);
console.log(newLength);

students.unshift("Theo");
console.log(students);

// Removing
const removed = students.pop();
console.log(removed);
console.log(students);

students.shift();
console.log(students);

console.log(students.includes("Julius"));

console.log(students.indexOf("Ethan"));
*/

// ===============================================

// Objects

/*
const henry = {
  firstName: "Henry",
  lastName: "Harrington",
  age: 20,
  job: "Cloud Architect",
  isMarried: false,
};

console.log(henry);

console.log(henry.lastName);
console.log(henry["lastName"]);

// Computed
const keyName = "Name";
console.log(henry["first" + keyName]);

const asked = prompt(
  "Who is henry? use these options: (firstName, lastName, age, job, isMarried) to know him.",
);

// Wrong ❌
// console.log(henry.asked);
// ✅
console.log(henry[asked]);

const property = "firstName";
const value = "Alice";

const alice = {
  [property]: value,
};

console.log(alice);
alice.lastName = "Monroe";
alice["email"] = "alice.monroe@gamil.com";
console.log(alice);
*/

// Object Method

/*
const henry = {
  firstName: "Henry",
  lastName: "Harrington",
  age: 20,
  job: "Cloud Architect",
  isMarried: false,

  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  allInfo() {
    return `I'm ${this.fullName()} a ${this.age} years old ${this.job} and i'm ${this.isMarried ? "married" : "single"}.`;
  },
};

console.log(henry.fullName());
console.log(henry.allInfo());
*/

// ===============================================

// Loops

/*
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
*/

/*
const students = ["Ali", "Reza", "Sara", "Mina", "Amir"];
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// break and continue
for (let i = 0; i < students.length; i++) {
  console.log("Checking:", students[i]);

  if (students[i] === "Sara") {
    console.log("Student found!");
    break;
  }
}
*/

/*
const scores = [18, 7, 15, 9, 20, 12];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 10) {
    continue;
  }

  console.log("Passed:", scores[i]);
}
*/

/*
// Nested Loop
for (let i = 1; i <= 5; i++) {
  let star = "";

  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  star += "\n";
  console.log(star);
}
*/

/*
// while loop

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let password = "";

while (password !== "1234") {
  password = prompt("Enter your password");
}

console.log("Login successful!");
*/
