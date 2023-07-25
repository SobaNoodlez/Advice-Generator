"use strict";

const adviceNumber = document.querySelector(".advice-num");
const dice = document.querySelector(".dice");
const advice = document.querySelector(".advice");

// add event listener to the dice
dice.addEventListener("click", function () {
  // get the advice from the API
  getAdvice();
});

// get advice from the API
function getAdvice() {
  // fetch the API
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      // get the advice
      const adviceText = data.slip.advice;
      // increment the advice number and display it
      adviceNumber.textContent = `Advice #${data.slip.id}`;

      // display the advice
      advice.textContent = adviceText;
      //add typewriter quotes before and after the advice using html entity
      advice.innerHTML = "&#8220;" + adviceText + "&#8221;";
    })
    .catch((error) => console.log(error));
}

// get advice when page loads

getAdvice();
