var startQuizEl = document.getElementById('startQuiz');
var quizEl = document.getElementById('quiz');
var questionImageEl = document.getElementById('questionImage');
var questionEl = document.getElementById('question');
var counterEl = document.getElementById('counter');
var timerEl = document.getElementById('timer');
var choiceAEl = document.getElementById('A');
var choiceBEl = document.getElementById('B');
var choiceCEl = document.getElementById('C');
var progressEl = document.getElementById('progress');
var scoreContainerEl = document.getElementById('scoreContainer');

var questionsObj = [
  {
    question : "Question #1:",
    imageSrc : "./assets/images/lizpf2.jpg",
    choiceA : "Option 1A",
    choiceB : "Option 1B",
    choiceC : "Option 1C",
    correct : "A"
  },
  {
    question : "Question 2",
    imageSrc : "",
    choiceA : "Option 2A",
    choiceB : "Option 2B",
    choiceC : "Option 2C",
    correct : "A"
  },
  {
    question : "Question 3",
    imageSrc : "",
    choiceA : "Option 3A",
    choiceB : "Option 3B",
    choiceC : "Option 3C",
    correct : "A"
  },
]

var lastQuestionIndex = questionsObj.length - 1;
var currentQuestionIndex = 0;

// starting the game by clicking on Start Quiz
document.addEventListener("click", displayQuestion);

// display question
function displayQuestion(){
  var quest = questionsObj[currentQuestionIndex];
  questionImageEl.innerHTML = "<img src=" + quest.imageSrc + ">";
  question.innerHTML = quest.question;
  choiceAEl.innerHTML = quest.choiceA;
  choiceBEl.innerHTML = quest.choiceB;
  choiceCEl.innerHTML = quest.choiceC;
  currentQuestionIndex ++;
  console.log("display question run");
}

