/*
alert("Hello World!");

console.log("Hello World!");
console.log(5 + 2);

let firstName = "AmirHossein";
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*
JavaScript Variable Naming Rules

1. can start with a letter, (`_`) or (`$`).
2. Cannot start with a number.
3. can contain A-Z|a-z - $ , _
4. Cannot contain spaces or special characters (`@`, `#`, `-`).
5. Variable names are case-sensitive (`name` and `Name` are different).
6. Cannot use reserved keywords (`let`, `class`, `return`).
7. Use camelCase for variable names (`firstName`, `totalPrice`).
8. Use meaningful and descriptive names (`userAge` instead of `x`).
9. Avoid using `$` and `_` at the beginning unless there is a specific reason.
*/

// ===============================================

/*
Data Types: Objects and Primitives:

1. String   - Represents text, e.g., "Hello"
2. Number   - Represents integers and decimals, e.g., 42, 3.14
3. Boolean  - Represents true or false
4. Undefined - A variable declared but not assigned a value
5. Null    - Represents an intentional absence of a value
6. Symbol  - Represents a unique identifier
7. BigInt   - Represents large integers, e.g., 123126262662172727n
*/

/*
// JavaScript has Dynamic Typing

let firstName = "sara";
let age = 20;
let isFemale = true;
console.log(firstName, typeof firstName);
console.log(age, typeof age);
console.log(isFemale, typeof isFemale);

isFemale = "Yes";
console.log(typeof isFemale);

// undefined
let height;
console.log(height);
console.log(typeof height);

height = 170;
console.log(typeof height);

console.log(typeof null);
*/

// ===============================================
/*
// let , const and var

let firstName = "sara";
firstName = "simon";

const lastName = "brown";
// lastName = "white";
// const lastName;

var age = 20;
age = 18;

weight = "60kg";
console.log(weight);
*/

// ===============================================
/*
// Mathematic Operators

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 ** 5);

const firstName = "AmirHossein";
const lastName = "AmirHossein";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10;
x += 15; // x = x + 15
x *= 2; // x = x * 2
x++; // x = x + 1
x--;
console.log(x);

// Comparison Operators

console.log(10 > 15);
console.log(10 >= 15);
console.log(10 < 15);
console.log(10 <= 15);
console.log(10 == 15);
*/

// ===============================================

/*
// Operator Precedence

const x = 200;
const y = 100;
const z = 34;

const result = x + y / 34;
// const = (x + y) / 34;
console.log(result);
*/

// ===============================================

/*
Challenge: temperature calculator

1: Store a temperature of 25°C in a variable.
Print its data type.

2: Convert Celsius to Fahrenheit.
Formula: (Celsius * 9 / 5) + 32

3: Increase the temperature by 5°C
using an assignment operator.

4: Check if the new temperature is
greater than 30°C using a comparison operator.
*/

/*

// Stage 1:
let celsius = 25;
console.log(typeof celsius); 

// Stage 2: Celsius to Fahrenheit
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit); 

// Stage 3:
celsius += 5;
console.log(celsius); 

// Stage 4:
console.log(celsius > 30);
*/

// ===============================================

/*
// Strings and Template literals

const firstName = "AmirHossein";
const lastName = "Ahmadi";
const job = "Programmer";
console.log("I'm " + firstName + " " + lastName + " and i'm a " + job);

console.log(`I'm ${firstName} ${lastName} and i'm a ${job}`);
*/

// ===============================================
/*
// Control Flow

const age = 20;

if (age >= 18) {
  console.log("You can drink 🍷");
} else {
  console.log("Sorry! you can only drink water 💧");
}

const day = 3;

if (day === 1) {
  console.log("Saturday");
} else if (day === 2) {
  console.log("Sunday");
} else if (day === 3) {
  console.log("Monday");
} else if (day === 4) {
  console.log("Tuesday");
} else if (day === 5) {
  console.log("Wednesday");
} else if (day === 6) {
  console.log("Thursday");
} else if (day === 7) {
  console.log("Friday");
} else {
  console.log("Invalid day number!");
}
*/

// ===============================================

/*
🎮 Challenge: Movie Ticket Pricing

Declare two variables: age and isStudent.

Determine the ticket price using if-else:
- If age is under 12, the ticket costs $5.
- If age is 12 or older and under 18, the ticket costs $8.
- If age is 18 or older and the person is a student, the ticket costs $10.
- Otherwise, the ticket costs $15.

Print the final ticket price.
*/

/*
let age = 18;
let isStudent = true;
let ticketPrice;

if (age < 12) {
    ticketPrice = 5;
} else if (age < 18) {
    ticketPrice = 8;
} else if (isStudent) {
    ticketPrice = 10;
} else {
    ticketPrice = 15;
}

console.log(`Ticket price: $${ticketPrice}`);
*/

// ===============================================

/*
// Type Conversion

const moneyBalance = "1000";
console.log(moneyBalance + 100);
console.log(Number(moneyBalance), moneyBalance);
console.log(Number(moneyBalance) + 100);

console.log(Number("AmirHossein"));
console.log(typeof NaN);

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("AmirHossein"));

console.log(String(50), 50);

// Type Coercion
console.log("The year is " + 2026 + " now");
console.log("50" - "5" - 5);
console.log("10" * "2");
console.log("10" / "2");

console.log("20" + 1 - 1);
*/

// ===============================================

/*
Falsy Values in JavaScript:

0, -0, "", null, undefined, NaN
*/

/*
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("0"));
console.log(Boolean([]));
console.log(Boolean({}));

const height = 0;
if (height) {
  console.log("I can see you 😃");
} else {
  console.log("Where are you! i can't see you 🧐");
}

let firstName;
if (firstName) {
  console.log(`My name is ${firstName}`);
} else {
  console.log("Name is undefined!");
}
*/

// ===============================================

/*
// Equality Operators

const age = "20";
if (age == 20) console.log(`you are ${age} years old. (loose comparison)`);
if (age === 20) console.log(`you are ${age} years old. (strict comparison)`);

const loginPassword = 1234;
const inputPassword = Number(prompt("Enter the password to login:"));
console.log(inputPassword);
console.log(typeof inputPassword);

if (inputPassword === loginPassword) {
  console.log("Logged in ✅");
} else {
  console.log("Wrong password ❌");
}

if (inputPassword !== loginPassword) {
  console.log("The password is: 1234");
}
*/

// ===============================================

/*
// Boolean Logic

const isUsernameCorrect = true;
const isPasswordCorrect = true;
const isAccountBlocked = false;

console.log(isUsernameCorrect && isPasswordCorrect);
console.log(isPasswordCorrect && isAccountBlocked);
console.log(isPasswordCorrect || isAccountBlocked);
console.log(!isAccountBlocked);

const canLogin = isUsernameCorrect && isPasswordCorrect && !isAccountBlocked;

if (canLogin) {
  console.log("You can login ✅");
} else {
  console.log("You can't login ❌");
}
*/

// ===============================================

/*
// Switch Statement

const day = 3;

switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Wednesday");
    break;
  case 6:
    console.log("Thursday");
    break;
  case 7:
    console.log("Friday");
    break;
  default:
    console.log("Invalid day number!");
}

if (day === 1) {
  console.log("Saturday");
} else if (day === 2) {
  console.log("Sunday");
} else if (day === 3) {
  console.log("Monday");
} else if (day === 4) {
  console.log("Tuesday");
} else if (day === 5) {
  console.log("Wednesday");
} else if (day === 6) {
  console.log("Thursday");
} else if (day === 7) {
  console.log("Friday");
} else {
  console.log("Invalid day number!");
}
*/

// ===============================================

/*
// Expressions and Statements

let age = 20;

age + 5;

if (age >= 18) {
  console.log("Adult");
}

console.log(`Next year, you will be ${age + 1} years old.`); //✅

// console.log(`You are ${
//     if (age >= 18) {
//         "an adult";
//     } else {
//         "a child";
//     }
// }.`);    //❌  statements not allowed in template literals . just expressions are allowed
*/

// ===============================================

/*
// Ternary Operator

let score = 15;
let result = score >= 10 ? "🎉 You passed!" : "❌ You failed!";

console.log(result); 

// How Does It Work?
// condition ? valueIfTrue : valueIfFalse;

// Using if/else
// let score = 15;
// let result;

// if (score >= 10) {
//     result = "🎉 You passed!";
// } else {
//     result = "❌ You failed!";
// }

// console.log(result);
*/

// ===============================================

/*
🎮 Challenge: Gaming Tournament

You are building a gaming tournament system!

Create two variables:
- `score`: The player's score.
- `lives`: The number of lives remaining.

🏆 Use the ternary operator to determine the player's status:

- If the score is 100 or higher AND the player has at least 1 life:
  "🏆 You Win!"
- If the score is below 100 AND the player has at least 1 life:
  "🎯 Keep Playing!"
- If the player has 0 lives:
  "💀 Game Over!"

🧠 Challenge Rules:
- Use only the ternary operator (no if/else).
- Store the final result in a variable called `status`.
- Print `status` to the console.

🧪 Test your code with these values:

1. score = 120, lives = 2  → 🏆 You Win!
2. score = 70, lives = 3   → 🎯 Keep Playing!
3. score = 150, lives = 0  → 💀 Game Over!
4. score = 50, lives = 0   → 💀 Game Over!

💡 Think carefully about the order of your conditions!
*/
/*
let score = 120;
let lives = 2;

let status =
  lives === 0
    ? "💀 Game Over!"
    : score >= 100
      ? "🏆 You Win!"
      : "🎯 Keep Playing!";

console.log(status);
*/
