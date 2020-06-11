// GLOBAL VARIABLES
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
var scoreEl = document.getElementById("score");
var nameInputBoxEl = document.getElementById("nameInputBox");
var highScoreEl = document.getElementById("highScore");

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
    choiceC: "Answer C: It depends on the context",
    choiceD: "Answer D: Not a valid question",
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
    question: "Question #5: How do you write \"Hello World\" in an alert box?",
    choiceA: "Answer A: alert(\"Hello World\");",
    choiceB: "Answer B: msgBox(\"Hello World\");",
    choiceC: "Answer C: alertBox(\"Hello World\");",
    choiceD: "Answer D: msg(\"Hello World\");",
    correct: "A",
  },
  {
    question: "Question #6: How do you write an IF statement in JavaScript?",
    choiceA: "Answer A: if i = 5 then",
    choiceB: "Answer B: if (i == 5)",
    choiceC: "Answer C: if i = 5",
    choiceD: "Answer D: if i == 5 then",
    correct: "B",
  },
  {
    question: "Question #7: How does a FOR loop start?",
    choiceA: "Answer A: for (i <= 5; i++)",
    choiceB: "Answer B: for (i = 0; i <= 5)",
    choiceC: "Answer C: for (i = 0; i <= 5; i++)",
    choiceD: "Answer D: for i = 1 to 5",
    correct: "C",
  },
  {
    question: "Question #8: What is the correct way to write a JavaScript array?",
    choiceA: "Answer A: var colors = [\"red\", \"green\", \"blue\"]",
    choiceB: "Answer B: var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
    choiceC: "Answer C: var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
    choiceD: "Answer D: var colors = \"red\", \"green\", \"blue\"",
    correct: "D",
  },
  {
    question: "Question #9: How do you round the number 7.25, to the nearest integer?",
    choiceA: "Answer A: Math.rnd(7.25)",
    choiceB: "Answer B: Math.round(7.25)",
    choiceC: "Answer C: round(7.25)",
    choiceD: "Answer D: rnd(7.25)",
    correct: "B",
  },
  {
    question: "Question #10: Which event occurs when the user clicks on an HTML element?",
    choiceA: "Answer A: onclick",
    choiceB: "Answer B: onmouseclick",
    choiceC: "Answer C: onchange",
    choiceD: "Answer D: onmouseover",
    correct: "A",
  },
];

var lastQuestionIndex = questionsArr.length - 1;
var currentQuestionIndex = -1;
var totalSecondsRemaining;
var countDownTimer;
var secondsRemaining;
var gameIsOver = false;

// START THE GAME ON CLICK
startQuizEl.addEventListener("click", startGame);

// CHECK THE ANSWER ON CLICK
document.addEventListener("click", checkAnswer);

// GENERATE THE QUESTION AND START THE TIMER AND SCORE
function startGame() {
  showQuizDiv();
  displayQuestion();
  counterStarts(59);
}

// HIDE ALL MODALS EXCEPT QUIZ DIV
function showQuizDiv() {
  correctEl.innerText = 0;
  incorrectEl.innerText = 0;
  startQuizEl.style.display = "none";
  scoreContainerEl.style.display = "block";
  quizEl.style.display = "block";
}

// DISPLAY THE CURRENT QUESTION
function displayQuestion() {
  currentQuestionIndex++;
  var quest = questionsArr[currentQuestionIndex];
  question.innerHTML = quest.question;
  choiceAEl.innerHTML = quest.choiceA;
  choiceBEl.innerHTML = quest.choiceB;
  choiceCEl.innerHTML = quest.choiceC;
  choiceDEl.innerHTML = quest.choiceD;
}

// START THE CLOCK
function counterStarts(sec){
  secondsRemaining = sec;

  countDownTimer = setInterval(function() {
    updateTimerDisplay(secondsRemaining);
    if (secondsRemaining === 0) {
      clearInterval(countDownTimer);
      endGame();
    } else {
      secondsRemaining--;
    }
  }, 1000);

}

// UPDATE THE CLOCK DISPLAY IN THE DOM
function updateTimerDisplay(secondsRemaining) {
  minutesEl.innerText = Math.floor(secondsRemaining / 60);
  if (secondsRemaining < 10) {
    secondsRemaining = "0" + secondsRemaining;
  }
  secondsEl.innerText = secondsRemaining;
  // UPDATE THE SCORE IN THE DOM
  scoreEl.innerText = secondsRemaining;
}

// CHECK THE ANSWER
function checkAnswer(e) {
  // COMPARE CLICKED ANSWER TO RIGHT ANSWER
  if (e.target.className === "choice quizBoxStyle") {
    // IF THE ANSWER IS CORRECT:
    if (e.target.id === questionsArr[currentQuestionIndex].correct) {
      clearInterval(countDownTimer);
      hideQuizDivs();
      correctAnswerEl.style.display = "block";   
      correctEl.innerText++;
      setTimeout(returnDisplay, 2000);
      counterStarts(secondsRemaining + 2);
    } 
    // IF THE ANSWER IS INCORRECT
    if (e.target.id !== questionsArr[currentQuestionIndex].correct) {
      clearInterval(countDownTimer);
      hideQuizDivs();
      incorrectAnswerEl.style.display = "block";
      incorrectEl.innerText++;
      setTimeout(returnDisplay, 2000);
      counterStarts(secondsRemaining - 8);
      // CODE TO SOLVE THE BUG OF COUNTER GOING INTO NEGATIVE NUMBERS
      if (secondsRemaining < 0) {
        secondsRemaining = 0
        clearInterval(countDownTimer);
        setTimeout(endGame, 2000);
      } 
    }
    displayQuestion();
  }
}

// HIDE THE QUIZ DIV
function hideQuizDivs() {
  quizEl.style.display = "none";
}

// RETURN THE QUIZ DIV IF THE GAME ISN'T OVER
function returnDisplay() {
  if (gameIsOver === false) {
    quizEl.style.display = "block";
  }
  correctAnswerEl.style.display = "none";
  incorrectAnswerEl.style.display = "none";
}

// END THE GAME AND DISPLAY END GAME MODAL
function endGame() {
  gameIsOver = true;
  quizEl.style.display = "none";
  gameOverModalEl.style.display = "block";
  nameInputBoxEl.addEventListener("submit", function() {
    var userName = nameInputBoxEl.value;
    console.log(userName); 
  })
}

// 
function displayHighScore(){
  // .ENTRIES AND .MAP ACTING AS FOR LOOPS TO RETURN ALL SCORES FROM THE STORED KEY VALUE PAIR
  var scores = Object.entries(localStorage).map(function(keyValuePair){
    return parseInt(keyValuePair[1]);
  });
  console.log(scores);
  var highScore = Math.max(...scores);
  console.log(highScore);
  // TESTING WHETHER OR NOT A USER HAS THE HIGH SCORE
  var usersWithHighScore = Object.entries(localStorage).map(function(keyValuePair){
    var score = parseInt(keyValuePair[1]);
    var user = keyValuePair[0];
    if (score === highScore) {
      return user;
    } 
  })
  usersWithHighScore = usersWithHighScore.filter(function(item){
    return item !== undefined;
  })
}

// At the end of the game, I can save my initials and score
document.getElementById("submitButton").addEventListener("click", function(){
  var userName = document.getElementById("nameInputBox").value;
  var userScore = window.localStorage.getItem(userName) || "0";
  if (parseInt(userScore) < parseInt(scoreEl.innerText)){
    window.localStorage.setItem(userName, scoreEl.innerText);
  }
  displayHighScore();
})
