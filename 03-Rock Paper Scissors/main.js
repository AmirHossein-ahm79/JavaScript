"use strict";

// Select Elements
const moves = document.querySelectorAll(".move");
const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");
const playerChoiceElement = document.querySelector(".player-choice");
const computerChoiceElement = document.querySelector(".computer-choice");
const playerQuestion = document.querySelector(".player-question");
const computerQuestion = document.querySelector(".computer-question");
const messageElement = document.querySelector(".message");
const resetButton = document.querySelector(".reset");

// Game Variables
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

// Display Message
const displayMessage = function (message) {
  messageElement.textContent = message;
};

// Start Game
const playGame = function (playerChoice) {
  // Computer Random Choice
  const randomIndex = Math.trunc(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  // Display Choices
  playerChoiceElement.src = `assets/${playerChoice}.png`;
  computerChoiceElement.src = `assets/${computerChoice}.png`;

  playerChoiceElement.classList.remove("hidden");
  computerChoiceElement.classList.remove("hidden");

  playerQuestion.classList.add("hidden");
  computerQuestion.classList.add("hidden");

  // Check Winner
  if (playerChoice === computerChoice) {
    displayMessage("It's a Draw!");
    messageElement.className = "message draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    displayMessage("🎉 You Win!");
    playerScore++;
    playerScoreElement.textContent = playerScore;
    messageElement.className = "message win";
  } else {
    displayMessage("😢 You Lose!");
    computerScore++;
    computerScoreElement.textContent = computerScore;
    messageElement.className = "message lose";
  }
};

// Player Click Events
moves.forEach(function (move) {
  move.addEventListener("click", function () {
    const playerChoice = move.getAttribute("data-choice");
    playGame(playerChoice);
  });
});

// Reset Game
resetButton.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;

  playerChoiceElement.src = "";
  computerChoiceElement.src = "";

  playerQuestion.classList.remove("hidden");
  computerQuestion.classList.remove("hidden");

  playerChoiceElement.classList.add("hidden");
  computerChoiceElement.classList.add("hidden");

  displayMessage("Make your move!");
  messageElement.className = "message";
});
