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
var correctAnswerEl = document.getElementById("correct");
var incorrectAnswerEl = document.getElementById("incorrect");

var questionsArr = [
  {
    question: "Question #1: Inside which HTML element does the JavaScript go?",
    choiceA: "&ltscripting&gt",
    choiceB: "&ltscript&gt",
    choiceC: "&ltjavascript&gt",
    correct: "B",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of an HTML element?",
    choiceA: "document.getElementById('elementId').innerHTML",
    choiceB: "#demo.innerHTML",
    choiceC: "document.getElementByName('elementId').innerHTML",
    correct: "A",
  },
  {
    question: "Question 3",
    choiceA: "Option 3A",
    choiceB: "Option 3B",
    choiceC: "Option 3C",
    correct: "A",
  },
];

var lastQuestionIndex = questionsArr.length - 1;
var currentQuestionIndex = -1;

// starting the game by clicking on Start Quiz
startQuizEl.addEventListener("click", startGame);
document.addEventListener("click", checkAnswer);

// generates question and starts timer
function startGame() {
  showQuizDiv();
  displayQuestion();
  counterStarts(999);
}

// display quiz div
function showQuizDiv() {
  startQuizEl.style.display = "none";
  quizEl.style.display = "block";
}

// display question
function displayQuestion() {
  currentQuestionIndex++;
  var quest = questionsArr[currentQuestionIndex];
  question.innerHTML = quest.question;
  choiceAEl.innerHTML = quest.choiceA;
  choiceBEl.innerHTML = quest.choiceB;
  choiceCEl.innerHTML = quest.choiceC;
}

//starting the clock
function counterStarts(sec){
  var secondsRemaining = sec;

  var countDownTimer = setInterval(function() {
    updateTimerDisplay(secondsRemaining);
    if (secondsRemaining === 0) {
      clearInterval(countDownTimer);
      endGame();
    } 
    secondsRemaining--;
  }, 1000);
}

// updating clock display in the dom
function updateTimerDisplay(totalSecondsRemaining) {
  minutesEl.innerText = Math.floor(totalSecondsRemaining / 60);
  var secondsRemaining = totalSecondsRemaining % 60;
  if (secondsRemaining < 10) {
    secondsRemaining = "0" + secondsRemaining;
  }
  secondsEl.innerText = secondsRemaining;
}

// checking the answer
function checkAnswer(e) {
  if (e.target.className === "choice") {
    if (e.target.id === questionsArr[currentQuestionIndex].correct){
      hideQuizDivs();
      correctAnswerEl.style.display = "block";
      setInterval(returnDisplay, 1500);
    } else {
      hideQuizDivs();
      incorrectAnswerEl.style.display = "block";
      setInterval(returnDisplay, 1500);
    }
    displayQuestion();
  }
}

function returnDisplay() {
  quizEl.style.display = "block";
  correctAnswerEl.style.display = "none";
  incorrectAnswerEl.style.display = "none";
}

function hideQuizDivs() {
  quizEl.style.display = "none";
}
// end game modal call
function endGame() {
  quizEl.style.display = "none";
  gameOverModalEl.style.display = "block";
}


// The counter can be paused, but then detracts 5 seconds
// There are 25 questions
// When a question is answered-
// the counter pauses
// if incorrect, the timer subtracts 5 seconds and a message is displayed
// scores are updated
// the next question is displayed
// At the end of the game, I can save my initials and score
