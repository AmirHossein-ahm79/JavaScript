"use strict";

// Array Destructuring
// const friends = ["savanah", "peter", "layla"];
// const fr1 = friends[0];
// const fr2 = friends[1];
// const fr3 = friends[2];
// console.log(fr1, fr2, fr3);

// const [fr1, fr2, fr3] = friends
// console.log(fr1, fr2, fr3);

// skip an element
// const [fr1, , fr3] = friends;
// console.log(fr1, fr3);

// swaping
// const person = ["AmirHossein", "Ahmadi"];
// let [firstName, lastName] = person;

// const temp = firstName;
// firstName = lastName;
// lastName = temp;
// console.log(firstName, lastName);

// [firstName, lastName] = [lastName, firstName];
// console.log(firstName, lastName);

// nested data
// const persons = ["david", "layla", [20, 30]];
// const [p1, p2, ages] = persons;
// console.log(p1, p2, ages);

// const [p1, , [a1, a2]] = persons;
// console.log(p1, a1, a2);

// default values
// const [x, y, z] = [10, 20];
// console.log(x, y, z);

// const [x = 0, y = 0, z = 0] = [10, 20];
// console.log(x, y, z);

// ===============================================

// Object Destructuring
// const student = {
//   name: "John",
//   age: 22,
//   major: "Computer Science",
// };

// const name = student.name;
// const age = student.age;
// const major = student.major;

// console.log(name, age, major);

// const { major, age, name } = student;
// console.log(name, age, major);

// Aliasing
// const { name: studentName, age: studentAge } = student;
// console.log(studentName, studentAge);

// Default Value
// const { city = "Unknown", name: studentName = "David" } = student;
// console.log(studentName, city);

// Mutating Variables
// let name = "Lara";
// let age = 20;
// ({ name, age } = student);
// console.log(name, age);

// Nested Object
// const student = {
//   name: "John",
//   age: 22,
//   address: {
//     city: "Berlin",
//     country: "Germany",
//   },
//   scores: {
//     math: 18,
//     physics: 16,
//   },

//   // Destructure object properties directly inside method parameters
//   showInfo({ city, country }) {
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//     console.log(`City: ${city}`);
//     console.log(`Country: ${country}`);
//   },
// };

// const {
//   name: studentName,
//   address: { city, country },
//   scores: { math, art = 10 },
// } = student;

// console.log(studentName, math, art, country, city);

// Pass the address object as an argument
// student.showInfo(student.address);

// ===============================================

// Spread Operator

// const numbers = [3, 4, 5];
// const newNumbers = [1, 2, numbers[0], numbers[1], numbers[2], 6, 7];
// console.log(newNumbers);

// const newNumbers = [1, 2, ...numbers, 6, 7];
// console.log(newNumbers);
// or
// console.log(1, 2, 3, 4, 5, 6, 7);
// console.log(...newNumbers);

// Copy Array
// const scores = [18, 15, 20, 17];
// const newScores = [...scores];

// newScores.push(19);

// console.log(scores);
// console.log(newScores);

// Merge Arrays
// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Python", "Django", "Node.js"];

// const allSkills = [...frontend, ...backend];

// console.log(allSkills);

// Spread Operator works on all iterables such as (arrays, strings, maps or sets)
// const myName = "AmirHossein";
// const letters = [...myName];
// console.log(letters);

// Usage In Functions Or Methods
// const numbers = [10, 20, 30];

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(numbers[0], numbers[1], numbers[2]));

// console.log(sum(...numbers));

// Objects
// const student = {
//   name: "Alex",
//   age: 18,
// };

// const updatedStudent = {
//   ...student,
//   grade: 17,
//   age: 20,
// };

// console.log(updatedStudent);

// ===============================================

// Rest Operator + Destructuring

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...others] = numbers;

// console.log(first,second, others);

// Difference Between Rest and Spread Operators

// Spread:
// - It's on Right Side of (=)
// - It Expands Elements
// const numbers = [1, 2, ...[3, 4]];
// console.log(numbers);

// Rest:
// - It's On Left Side Of (=)
// - It Collects Elements
// const [x, y, ...z] = [1, 2, 3, 4, 5];
// console.log(x, y, z);

// Mix Spread and Rest
// const student = {
//   personalInfo: ["Sara", "Coner", 20],
//   additionalInfo: ["New York", "AI Engineer"],
// };

// const [firstName, , age, ...otherInfo] = [...student.personalInfo, ...student.additionalInfo];

// console.log(firstName, age, otherInfo);

// Objects
// const student = {
//   firstName: "Sara",
//   lastName: "Coner",
//   age: 20,
//   city: "New York",
//   job: "AI Engineer",
//   skills: ["Python", "JavaScript"],
// };

// Object Destructuring + Rest
// const { firstName, age, skills, ...otherInfo } = student;

// console.log(firstName);
// console.log(age);
// console.log(skills);
// console.log(otherInfo);

// Functions
// function calculateAverage(...scores) {
//   let sum = 0;

//   for (let i = 0; i < scores.length; i++) {
//     sum += scores[i];
//   }

//   console.log(sum / scores.length);
// }

// calculateAverage(2, 5);
// calculateAverage(18, 20, 15);
// calculateAverage(10, 15, 20, 19, 16);

// const scores = [15, 17, 19, 20, 18];
// calculateAverage(...scores);

// ===============================================

// Short Circuiting

// OR

// console.log("Hello" || "world");
// console.log("" || "David");
// console.log(null || undefined);
// console.log(true || 0);
// console.log(undefined || "" || 0 || "Hi" || null || 10);

// const productCount = 10;
// const count = productCount || 20;
// console.log(count);

// const count2 = productCount ? productCount : 20;
// console.log(count2);

// AND
// console.log("Hello" && "World");
// console.log(null && 1);
// console.log("Hi" && 10 && undefined && "David" && null);

// const age = 20;

// if (age >= 18){
//   console.log("Access Granted");
// }

// age >= 18 && console.log("Access Granted");

// ===============================================

// Nullish Coalescing Operator

// const productCount = 0;
// const count = productCount || 20;
// console.log(count);

// const count2 = productCount ?? 20;
// console.log(count2);

// ===============================================

/*
// Logical Assignment Operators

const player = {
  nickname: "",
  score: 0,
  level: undefined,
  clanTag: "iran_team",
};

// using (Or -> || )
player.nickname = player.nickname || "Fereydoon";
// Modern way using ||=
player.nickname ||= "Fereydoon";

console.log(player.nickname);

// using ??
player.score = player.score ?? 100;
player.level = player.level ?? 1;

// Modern way using ??=
player.score ??= 100;
player.level ??= 1;

console.log(player.score);
console.log(player.level);

// using &&
player.clanTag = player.clanTag && player.clanTag.toUpperCase();

// Modern way using &&=
player.clanTag &&= player.clanTag.toUpperCase();

console.log(player.clanTag);
*/

// ===============================================

/*
// Looping Arrays: (for of )

const fruits = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Access indexes
for (const [index, fruit] of fruits.entries()) {
  console.log(`${index + 1}: ${fruit}`);
}
*/

// ===============================================

/*
// Enhanced Object Literals

// Property Shorthand
const name = "Ali";
const age = 28;

// Old way (ES5)
const userES5 = {
  name: name,
  age: age,
};

// New way (ES6+)
const userES6 = {
  name,
  age,
};

console.log(userES6);

// Method Shorthand
// Old way (ES5)
const carES5 = {
  brand: "Toyota",
  start: function () {
    console.log("Engine started");
  },
};

// New way (ES6+)
const carES6 = {
  brand: "Toyota",
  start() {
    console.log("Engine started");
  },
};

carES6.start();

// Computed Property Names
const dynamicKey = "role";
const prefix = "user";

// New way (ES6+)
const account = {
  username: "sara_dev",
  [dynamicKey]: "Admin",
  [prefix + "_id"]: 1042,
};

console.log(account);
*/

// ===============================================

// Optional Chaining

// const user = {
//   name: "John",
//   address: {
//     city: "London",
//     country: "UK",
//   },
// };

// console.log(user.address.city);

// What if address object does not exist?
// const user2 = {
//   name: "John",
// };

// console.log(user2.address.city);

// if (user2.address) {
//   console.log(user2.address.city);
// }

// what if we had more nested objects?
// const user3 = {
//   name: "John",
//   address: {
//     location: {
//       city: "London",
//     },
//   },

//   introduce() {
//     return `My Name is ${this.name} and i live in ${this.address.location.city}.`;
//   },
// };

// if (user3.address) {
//   if (user3.address.location) {
//     console.log(user3.address.location.city);
//   }
// }

// Or
// console.log(user3.address && user3.address.location && user3.address.location.city);

// Better Way
// console.log(user3.address?.location?.city);

// Mix with ??
// const city = user3.address?.location?.city ?? "Unknown";
// console.log(city);

// console.log(user3.introduce?.() ?? "Method does not exist!");

// ===============================================
