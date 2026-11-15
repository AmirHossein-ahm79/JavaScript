"use strict";

// Scoping

/*
// Global Scope
const appName = "My Website";
let usersCount = 100;

function showAppInfo() {
  console.log(appName);
  console.log(usersCount);
}

showAppInfo();
*/

/*
// Function Scope
function testScope() {
    var name = "Ali";
    let age = 25;
    const city = "Tehran";

    console.log(name);
    console.log(age);
    console.log(city);
}

testScope();

console.log(name); 
console.log(age);  
console.log(city); 
*/

/*
// Block Scope
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

// var is not block scoped
console.log(a);

console.log(b);
console.log(c);
*/

/*
// Lexical Scope
function outer() {
  let username = "Ali";

  function inner() {
    console.log(username);
  }

  inner();
}

outer();
*/

/*
// Scope Chain
const country = "Iran";

function outer() {
    const city = "Tehran";

    function inner() {
        const username = "Ali";

        console.log(username);
        console.log(city);
        console.log(country);
    }

    inner();
}

outer();
*/

/*
// Shadowing
let username = "Ali";

function showUser() {
  let username = "Reza";

  console.log(username);
}

showUser();

console.log(username);
*/

/*
// Mixed Example
const gameName = "Adventure Game";
let score = 100;

function startGame() {
  let playerName = "Ali";
  var level = 1;

  console.log(gameName);
  console.log(score);

  if (true) {
    let score = 50;
    const bonus = 20;
    var playerStatus = "Playing";

    console.log(score);
    console.log(bonus);
    console.log(playerName);
  }

  console.log(score);
  console.log(playerStatus);

  // console.log(bonus);

  function finishGame() {
    let result = score + 50;
    level += 1;

    console.log(level);

    console.log(playerName);
    console.log(result);

    score = 200;

    console.log(score);

    function showResult() {
      const message = "Game Finished";

      console.log(message);
      console.log(score);
      console.log(playerName);
      console.log(gameName);
    }

    showResult();
  }

  finishGame();
}

startGame();

console.log(gameName);
console.log(score);

// console.log(playerName);
// console.log(playerStatus);
*/

// ===============================================

// Hoisting and TDZ (Temporal Dead Zone)

/*
// Variables
console.log(firstName);
console.log(age);
console.log(job);

var firstName = "AmirHossein";
let age = 20;
const job = "Programmer";
*/

/*
// Functions
sayHelloDecl();
sayHelloExpr();
sayHelloArrow();

function sayHelloDecl() {
  console.log("Hello");
}

const sayHelloExpr = function () {
  console.log("Hello");
};

const sayHelloArrow = () => console.log("Hello");
*/

/*
// Don't use var!
// Example
if (!isAdult) console.log("Not Adult!");

var isAdult = true;

// Declaring (Top Level) varibales with var
// become properties of the global window object
var x = 10;
let y = 20;
let z = 30;

console.log(window.x);
console.log(window.y);
console.log(window.z);
*/

// ===============================================

/*
// this keyword

// In global Scope
console.log(this);

// In regular function
function showThis() {
  // in strict mode is undefined otherwise => window
  console.log(this);
}

showThis();

// In Methods
const user = {
  name: "Alex",
  age: 25,

  introduce: function () {
    console.log(`My name is ${this.name}`);
    console.log(`I am ${this.age} years old`);
  },
};

user.introduce();

// In Nested Functions
const car = {
  brand: "BMW",

  showBrand: function () {
    console.log(this.brand);

    function innerFunction() {
      console.log(this.brand);
    }

    innerFunction();
  },
};

car.showBrand();

// Using Arrow Function
const car2 = {
  brand: "BMW",

  showBrand: function () {
    console.log(this.brand);

    const innerFunction = () => {
      console.log(this.brand);
    };

    innerFunction();
  },
};

car2.showBrand();

// In Arrow Functions
const car3 = {
  brand: "BMW",

  regularFunction: function () {
    console.log(this.brand);
  },

  arrowFunction: () => {
    console.log(this.brand);
  },
};

car3.regularFunction();
car3.arrowFunction();

// In Event listener
const h1El = document.querySelector("h1");
h1El.addEventListener("click", function () {
  console.log(this);
});

// Again using arrow Function
// h1El.addEventListener("click", () => {
//   console.log(this);
// });

// The solution
// h1El.addEventListener("click", (event) => {
//   console.log(event.currentTarget);
// });


// An other bad example of using var
var brand = "BMW";

const car4 = {
  brand: "BMW",

  regularFunction: function () {
    console.log(this.brand);
  },

  arrowFunction: () => {
    console.log(this.brand);
  },
};

car4.regularFunction();
car4.arrowFunction();

*/

// ===============================================

/*
// arguments keyword

function add(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(add(5, 10));

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

console.log(addArrow(5, 10));
*/

// ===============================================

// Object References
// Shallow Copy vs. Deep Copy

/*
const person = {
  firstName: "william",
  lastName: "Shakespeare",
  age: 80,
};

const personCopy = person;
personCopy.lastName = "Henry";

console.log("person:", person);
console.log("personCopy:", personCopy);
*/

/*
// Shallow Copy
const person = {
  firstName: "william",
  lastName: "Shakespeare",
  age: 80,
  friends: ["George", "Mave"],
};

const personCopy = { ...person };
personCopy.lastName = "Henry";

console.log("person:", person);
console.log("personCopy:", personCopy);

console.log("=".repeat(50));

personCopy.friends.push('Theo');
personCopy.friends.push('Jane');

console.log("person:", person);
console.log("personCopy:", personCopy);
*/

/*
// Deep Copy
const person = {
  firstName: "william",
  lastName: "Shakespeare",
  age: 80,
  friends: ["George", "Mave"],
};

const personClone = structuredClone(person);

personClone.friends.push("Theo");
personClone.friends.push("Jane");

console.log("person:", person);
console.log("personClone:", personClone);
*/
