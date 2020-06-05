var start = document.getElementById('start');
var quiz = document.getElementById('quiz');
var qImg = document.getElementById('questionImage');
var question = document.getElementById('question');
var counter = document.getElementById('counter');
var timeGauge = document.getElementById('timeGauge');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var progress = document.getElementById('progress');
var scoreContainer = document.getElementById('scoreContainer');

var questions = [
  {
    question : "Question 1",
    imgSrc : "",
    choiceA : "Option 1A",
    choiceB : "Option 1B",
    choiceC : "Option 1C",
    correct : "A"
  },
  {
    question : "Question 2",
    imgSrc : "",
    choiceA : "Option 2A",
    choiceB : "Option 2B",
    choiceC : "Option 2C",
    correct : "A"
  },
  {
    question : "Question 3",
    imgSrc : "",
    choiceA : "Option 3A",
    choiceB : "Option 3B",
    choiceC : "Option 3C",
    correct : "A"
  },
]

