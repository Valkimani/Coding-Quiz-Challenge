// console.log("Hello world");
// Targeted the id in the quiz container and the button
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start-quiz");
var questionContainer = document.getElementById("question-container");
var heading = document.getElementById("heading");
var answerConatiner = document.getElementById("answer-container");
var scoreConatiner = document.getElementById("score-answer");
var timeImterval;

var timeleft = 75;
var questionIndex = 0;
var score;

// window.onload = function () {
//   //   timeDisplay.textContent = "Time:0";
// };
// Function:start time quiz
function startQuiz() {
  quizContainerEl.setAttribute("class", "hide");
  questionContainerEl.removeAttribute("class");
  setTime();
  pickQuestions();
}

// Function:start time quiz
function startTime() {
  timeEl.addEventListener("click", function () {
    startTime();
  });

  timeImterval = setInterval(function () {
    secondsLeft--;
    timeImterval.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timeImterval);
    }
  }, 1000);
}
Function;
// addEventListener to listen to the start button
startButton.addEventListener("click", function () {
  //styled the quizConatiner id to hide it when the start button was clicked.
  quizContainer.style.display = "none";
  renderdataType();
  document.getElementById(question - container).innerHTML = "none";
});
// Creating a function to display the did we hid

var questionArray = [
  {
    question: "Commonly used data types DO NOT include:",

    choices: ["1.strings", "2. booleans", "3.alerts", "4.numbers"],

    answer: "4.numbers",
  },
  {
    question: "The condition in an if/else statementis enclosed within-:",

    choices: [
      "1.Quotes",
      "2. Curly brackets",
      "3.Parentheses",
      "4.Square brackets",
    ],
    answer: "3.Parentheses",
  },

  {
    question: "Arrays in Java Script can be used to store -.",

    choices: [
      "1.Numbers and strings",
      "2.Other arrays",
      "3.Booleans",
      "4.All of the above",
    ],
    answer: "4.All of the above",
  },

  {
    question:
      "String values must be enclosed within - when being assifgned to variables.",

    choices: ["1.comas", "2.curly brackets", "3.quotes", "4.paretheses"],
    answer: "3.curly brackets",
  },
  {
    question:
      "A very useful tool used during development and debugging for priniting content to the debugger is:",

    choices: [
      "1.Java script",
      "2.terminal/bash",
      "3.for loops",
      "4.console.log",
    ],
    answer: "console.log",
  },
];
// to pull only one item in the Object, used.
var questionIndex = 0;
function renderdataType() {
  //   document.getElementById(answer - container).innerHTML = "";
  // How to clear answer container and addd the new buttons
  heading.textContent = questionArray[questionIndex].question;
  for (var i = 0; i < questionArray[questionIndex].choices.length; i++) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute(
      "style",
      " margin: 18px; horizontal-align text-center margin 5px"
    );
    // Adding button, putting words in the button and telling it what to do when you click on it
    choiceBtn.textContent = questionArray[questionIndex].choices[i];
    //   console.log("Clicked");
    choiceBtn.addEventListener("click", function (event) {
      //   console.log(event.target);

      if (event.target.textContent != questionArray[questionIndex].answer) {
        createDiv.textContent = "Wrong!";
        console.log(answer);
        questionIndex++;
        renderQuizbank();
      } else {
        createDiv.textContent = "Correct!";
        questionIndex++;
        console.log(answer);
        renderdataType();
      }
    });
    answerConatiner.append(choiceBtn);
  }
}
// Have a couple of hard coded values and generate everything else dynamically
//
//
//

// commonData.addEventListener("click", function (event) {
//   if (event.target.matches("button")) {
//     console.log("Data type");
//     var selectedType = even.target.getAttribute("data-value");
//     console.log(selectedType);
//     // /Added text content to clear the DOM to replace answers when the button is clicked with an empty string
//     selectedType.textContent = "";
//     var typeToDisplay = document.createElement("h3");
//     typeToDisplay.textcontent = selectedType;
//     selectedType.append(typeToDisplay);
//   }
// });
