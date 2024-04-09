// Variables
const scores = document.querySelectorAll('#score');
const averageScore = document.getElementById('average-score');
const categories = document.querySelectorAll('.category');

let totalScore = 0;

fetch('../data.json')
  .then((res) => res.json())
  .then((data) => {
    Array.from(scores).map((score, index) => {
      totalScore += data[index].score;
      score.innerHTML = data[index].score;
    })
    
    Array.from(categories).map((category, index) => {
      console.log(category);
      category.firstElementChild.src = data[index].icon;
      category.lastElementChild.innerHTML = data[index].category;
    })

    averageScore.innerHTML = Math.floor(totalScore / scores.length);
  })
