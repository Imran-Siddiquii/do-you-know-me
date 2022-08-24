//readline-sync
var readlineSync = require('readline-sync');

//to read username and store it

var userName = readlineSync.question("What is your Name ? ");

console.log("Welcome " + userName + " It is good to know you lets see how well you know Mohd Imran");
console.log("________________________")
var score = 0;
//function
function historyQuiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Your answer " + answer + " is right.")
    score = score + 1;
    console.log("Your Score is : " + score)
    console.log('__________________________');
  } else {
    console.log("Oops! Your answer " + userAnswer + " is wrong")
    console.log("Your score is : " + score);
    console.log("Right answer is : " + answer)
    console.log('__________________________');
  }
}
//question inside array using object
var quiz = [{
  question: 'Q1. Where does he live ', answer: "Navi Mumbai"
},
{
  question: 'Q2. What is his qualification? ',
  answer: "BCA"
},
{
  question: "Q3. Does he likes Marvel's movies? ",
  answer: "yes"
},
{
  question: "Q4. What is his native state? ",
  answer: "up"
},
{
  question: 'Q5. Is he commited? ',
  answer: "yes"
}]

//for loop for taking quesion one by one 

for (var i = 0; i < quiz.length; i++) {
  currentQue = quiz[i].question;
  currentAns = quiz[i].answer;
  historyQuiz(currentQue, currentAns);
}


// if (score > highScore) {
//   console.log(" Highest score is " + highScore + " Your score is " + score + " Yayy!! You Have beaten the highest score Please share the screenshot.")
// }
// if (i >= quiz.length - 1) {
//   console.log("Your score is : " + score + " Highest score is : " + highScore)
// }

var bestScore = [{
  Name: "Imran",
  Score: 4
}]
function checkscore() {
  console.log("Yay!!! you score  " + score)
  console.log("check out the high score if you beat please share a screenshot i will update")
}
checkscore();
function showScore(name, score) {
  console.log(name + ": " + score)
}
for (i = 0; i < bestScore.length; i++) {
  showScore(bestScore[i].Name, bestScore[i].Score)
}