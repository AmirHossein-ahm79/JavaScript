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
*/
