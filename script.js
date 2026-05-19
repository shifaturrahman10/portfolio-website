const text = [
  "Electrical Engineering Student",
  "Tech Learner",
  "Future Developer"
];

let count = 0;
let index = 0;
let currentText = "";

function type() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  let letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
}

type();

// DARK MODE TOGGLE (FIXED)
function toggleTheme() {
  document.body.classList.toggle("dark");

  let btn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark")) {
    btn.innerHTML = "☀️";
  } else {
    btn.innerHTML = "🌙";
  }
}