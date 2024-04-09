// Variables
const scores = document.querySelectorAll('#score');
const averageScore = document.getElementById('average-score');
const categories = document.querySelectorAll('.category');

let totalScore = 0;

// Retrieve json data
fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    // Set scores
    Array.from(scores).map((score, index) => {
      totalScore += data[index].score;
      score.innerHTML = data[index].score;
    })
    
    // Set category data
    Array.from(categories).map((category, index) => {
      category.firstElementChild.src = data[index].icon;
      category.lastElementChild.innerHTML = data[index].category;
    })

    // Set average score
    averageScore.innerHTML = Math.floor(totalScore / scores.length);
  })
