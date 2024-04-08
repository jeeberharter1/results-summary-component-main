// Retrieve data
let response = await fetch('../data.json');
let data = await response.json();

// Variables
const scores = document.querySelectorAll('#score');
const averageScore = document.getElementById('average-score');
const categories = document.querySelectorAll('.category');

let totalScore = 0;

// Set scores
Array.from(scores).map((score, index) => {
  totalScore += data[index].score;
  score.innerHTML = data[index].score;
})

averageScore.innerHTML = Math.floor(totalScore / scores.length);

// Set category data
Array.from(categories).map((category, index) => {
  console.log(category);
  category.firstElementChild.src = data[index].icon;
  category.lastElementChild.innerHTML = data[index].category;
})