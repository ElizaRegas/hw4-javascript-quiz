var startQuizEl = document.getElementById("startQuiz");
var quizEl = document.getElementById("quiz");
var questionImageEl = document.getElementById("questionImage");
var questionEl = document.getElementById("question");
var counterEl = document.getElementById("counter");
var timerEl = document.getElementById("timer");
var choiceAEl = document.getElementById("A");
var choiceBEl = document.getElementById("B");
var choiceCEl = document.getElementById("C");
var progressEl = document.getElementById("progress");
var scoreContainerEl = document.getElementById("scoreContainer");
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");
var guessAnswer = document.getElementsByClassName("choice");
var gameOverModalEl = document.getElementById("gameOverModal");

var questionsObj = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    imageSrc: "./assets/images/lizpf2.jpg",
    choiceA: "scripting",
    choiceB: "script",
    choiceC: "javascript",
    correct: "B",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of an HTML element?",
    imageSrc: "",
    choiceA: "document.getElementById('elementId').innerHTML",
    choiceB: "#demo.innerHTML",
    choiceC: "document.getElementByName('elementId').innerHTML",
    correct: "A",
  },
  {
    question: "Question 3",
    imageSrc: "",
    choiceA: "Option 3A",
    choiceB: "Option 3B",
    choiceC: "Option 3C",
    correct: "A",
  },
];

var lastQuestionIndex = questionsObj.length - 1;
console.log(lastQuestionIndex);
var currentQuestionIndex = 0;

// starting the game by clicking on Start Quiz
startQuizEl.addEventListener("click", displayQuestion);

// display question
function displayQuestion() {
  // hide the start quiz div
  counterStarts(5);
  startQuizEl.style.display = "none";
  var quest = questionsObj[currentQuestionIndex];
  questionImageEl.innerHTML = "<img src=" + quest.imageSrc + " style='width: 200px;'>";
  question.innerHTML = quest.question;
  choiceAEl.innerHTML = quest.choiceA;
  choiceBEl.innerHTML = quest.choiceB;
  choiceCEl.innerHTML = quest.choiceC;
  currentQuestionIndex++;
  console.log(currentQuestionIndex);
  console.log("display question run");
}

function counterStarts(sec){
  var secondsRemaining = sec;

  var countDownTimer = setInterval(function() {
    updateTimerDisplay(secondsRemaining);
    if (secondsRemaining === 0) {
      clearInterval(countDownTimer);
      endGame();
      console.log("game over");
    } 
    secondsRemaining--;
  }, 1000);
}

function updateTimerDisplay(totalSecondsRemaining) {
  minutesEl.innerText = Math.floor(totalSecondsRemaining / 60);
  var secondsRemaining = totalSecondsRemaining % 60;
  if (secondsRemaining < 10) {
    secondsRemaining = "0" + secondsRemaining;
  }
  secondsEl.innerText = secondsRemaining;
}

function endGame() {
  quizEl.style.display = "none";
  gameOverModalEl.style.display = "block";
}


// The counter can be paused, but then detracts 5 seconds
// There are 25 questions
// When the timer runs out, the quiz ends
// When a question is answered-
// the counter pauses
// accuracy is assessed
// if correct, message is displayed
// if incorrect, the timer subtracts 5 seconds and a message is displayed
// scores are updated
// the next question is displayed
// At the end of the game, I can save my initials and score
