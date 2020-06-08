var startQuizEl = document.getElementById("startQuiz");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("timer");
var choiceAEl = document.getElementById("A");
var choiceBEl = document.getElementById("B");
var choiceCEl = document.getElementById("C");
var choiceDEl = document.getElementById("D");
var scoreContainerEl = document.getElementById("scoreContainer");
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");
var guessAnswer = document.getElementsByClassName("choice");
var gameOverModalEl = document.getElementById("gameOverModal");
var correctAnswerEl = document.getElementById("correctModal");
var incorrectAnswerEl = document.getElementById("incorrectModal");
var correctEl = document.getElementById("correct");
var incorrectEl = document.getElementById("incorrect");
var timerRunning = false;

var questionsArr = [
  {
    question: "Question #1: Inside which HTML element do we put the JavaScript?",
    choiceA: "Answer A: &ltscripting&gt",
    choiceB: "Answer B: &ltscript&gt",
    choiceC: "Answer C: &ltjavascript&gt",
    choiceD: "Answer D: &ltjs&gt",
    correct: "B",
  },
  {
    question: "Question #2: Where is the correct place to insert the Javascript &ltscript&gt tag?",
    choiceA: "Answer A: The &lthead&gt section",
    choiceB: "Answer B: The &ltbody&gt section",
    choiceC: "Answer C: Either the &lthead&gt section or &ltbody&gt section",
    choiceD: "Answer D: The &ltfooter&gt section",
    correct: "C",
  },
  {
    question: "Question #3: The external JavaScript file must contain the &ltscript&gt tag.",
    choiceA: "Answer A: True",
    choiceB: "Answer B: False",
    choiceC: "Answer C: Either",
    choiceD: "Answer D: It depends on the context",
    correct: "B",
  },
  {
    question: "Question #4: What is the correct syntax for referring to an external script called \"xxx.js\"?",
    choiceA: "Answer A: &ltscript type=\"xxx.js\"&gt",
    choiceB: "Answer B: &ltscript href=\"xxx.js\"&gt",
    choiceC: "Answer C: &ltscript name=\"xxx.js\"&gt",
    choiceD: "Answer D: &ltscript src=\"xxx.js\"&gt",
    correct: "D",
  },
  {
    question: "Question #5: ",
    choiceA: "Answer A: ",
    choiceB: "Answer B: ",
    choiceC: "Answer C: ",
    choiceD: "Answer D: ",
    correct: " ",
  },
  {
    question: "Question #6: ",
    choiceA: "Answer A: ",
    choiceB: "Answer B: ",
    choiceC: "Answer C: ",
    choiceD: "Answer D: ",
    correct: " ",
  },
  {
    question: "Question #7: ",
    choiceA: "Answer A: ",
    choiceB: "Answer B: ",
    choiceC: "Answer C: ",
    choiceD: "Answer D: ",
    correct: " ",
  },
  {
    question: "Question #8: ",
    choiceA: "Answer A: ",
    choiceB: "Answer B: ",
    choiceC: "Answer C: ",
    choiceD: "Answer D: ",
    correct: " ",
  },
  {
    question: "Question #9: ",
    choiceA: "Answer A: ",
    choiceB: "Answer B: ",
    choiceC: "Answer C: ",
    choiceD: "Answer D: ",
    correct: " ",
  },
  {
    question: "Question #10: ",
    choiceA: "Answer A: ",
    choiceB: "Answer B: ",
    choiceC: "Answer C: ",
    choiceD: "Answer D: ",
    correct: " ",
  },
  {
    question: "Question #11: ",
    choiceA: "Answer A: ",
    choiceB: "Answer B: ",
    choiceC: "Answer C: ",
    choiceD: "Answer D: ",
    correct: " ",
  },
];

var lastQuestionIndex = questionsArr.length - 1;
var currentQuestionIndex = -1;
var totalSecondsRemaining;

// starting the game by clicking on Start Quiz
startQuizEl.addEventListener("click", startGame);
document.addEventListener("click", checkAnswer);

// generates question and starts timer
function startGame() {
  showQuizDiv();
  displayQuestion();
  counterStarts(119);
}

// display quiz div
function showQuizDiv() {
  correctEl.innerText = 0;
  incorrectEl.innerText = 0;
  startQuizEl.style.display = "none";
  scoreContainerEl.style.display = "block";
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
  choiceDEl.innerHTML = quest.choiceD;
}

//starting the clock
function counterStarts(sec){
  timerRunning = true;
  var secondsRemaining = sec;

  var countDownTimer = setInterval(function() {
    updateTimerDisplay(secondsRemaining);
    if (secondsRemaining === 0) {
      clearInterval(countDownTimer);
      endGame();
    } else {
      secondsRemaining--;
    }

    if (timerRunning === false) {
      clearInterval(countDownTimer);
      console.log("timer stopped");
    }
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
  if (e.target.className === "choice quizBoxStyle") {
    if (e.target.id === questionsArr[currentQuestionIndex].correct){
      hideQuizDivs();
      correctAnswerEl.style.display = "block";   
      correctEl.innerText++;
      setInterval(returnDisplay, 1500);
    } else {
      hideQuizDivs();
      timerRunning = false;
      incorrectEl.innerText++;
      incorrectAnswerEl.style.display = "block";
      // minusFive();
      setInterval(returnDisplay, 1500);
    }
    displayQuestion();
  }
}

// function minusFive() {
//   var fiveLess = parseInt(secondsEl.innerText) - 5;
//   counterStarts(fiveLess);
// }

function hideQuizDivs() {
  quizEl.style.display = "none";
}

function returnDisplay() {
  quizEl.style.display = "block";
  correctAnswerEl.style.display = "none";
  incorrectAnswerEl.style.display = "none";
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
