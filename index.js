var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "A",
    score: 3,
  },

  {
    name: "B",
    score: 2,
  },
]

var questions = [{
  question: "What command is used to count the total number of lines, words, and characters contained in a file?",
  answer: "wc"
}, {
  question: "What command is used to remove files?",
  answer: "rm"
},
{
  question: "What command is used to remove the directory?",
  answer: "rmdir"
},{
  question:"What command is used with vi editor to delete a single character?",
  answer:"x"
},{
  question:"Single dot (.) with cd refers to ___",
  answer:"Current Directory"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "let's see if you know about Linux commands :-)");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("correct !");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Yeah!Your Score is: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
