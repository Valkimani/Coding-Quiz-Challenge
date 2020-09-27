// console.log("Hello world");
// Taregted the id in the quiz container and the button
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start-quiz");
var commonData = document.getElementById("common-data");
// addEventListener to listen to the start button
startButton.addEventListener("click", function () {
  //styled the quizConatiner id to hide it when the start button was clicked.
  quizContainer.style.display = "none";
});

function renderCommonDta() {
  var dataTypes = ["1.strings", "2.booleans", " 3.alerts", "4.numbers"];
}

for (var i = 0; i < dataTypes.length; i++) {
  1; // Create an element
  var button = document.createElement("button");
  2; // Add content
  button.textContent = dataTypes[i];
  button.setAttribute("data-value", dataTypes[i]);
  3; //   Append to an existing element
  commonData.append(button);
}
