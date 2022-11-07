const url = "https://api.adviceslip.com/advice";
const button = document.querySelector(".dice");
const adviceID = document.querySelector("#adviceId");
const adviceText = document.querySelector("#advice_text");

button.addEventListener("click", getQuote);

async function getQuote() {
    const response = await fetch(url);
    const data = await response.json();
    //   adviceID.innerHTML = data.slip.id;
    //   adviceText.innerHTML = data.slip.advice;
    adviceID.innerHTML = `Advice #${data.slip.id}`;
    adviceText.innerHTML = `&#8220${data.slip.advice}&#8221`;
}

// function loadQuote() {
//     fetch("https://api.adviceslip.com/advice")
//       .then((response) => {
//         return response.json();
//       })
//       .then((response) => {
//         id.innerHTML = `Advice #${response.slip.id}`;
//         advice.innerHTML = `&#8220${response.slip.advice}&#8221`;
//       });
//   }
