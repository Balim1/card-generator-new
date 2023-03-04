import "./style.css";

window.onload = function() {
  const symbols = ["♦", "♥", "♠", "♣"];
  const number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function getRandomNumbers(array) {
    return Math.floor(Math.random() * array.length);
  }

  let cards = document.querySelector(".card");
  let symbol1 = document.querySelector(".symbol1");
  let numbers = document.querySelector(".number");
  let symbol2 = document.querySelector(".symbol2");

  cards.classList.add(symbols[getRandomNumbers(symbols)]);
  cards.classList.add(number[getRandomNumbers(number)]);
  symbol1.innerHTML = symbols[getRandomNumbers(symbols)];
  numbers.innerHTML = number[getRandomNumbers(number)];
  symbol2.innerHTML = symbols[getRandomNumbers(symbols)];
};
