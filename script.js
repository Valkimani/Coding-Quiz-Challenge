// console.log("Hello world");
// Taregted the id in the container and the button
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start-quiz");

// addEventListener to listen to the button click
startButton.addEventListener("click", function () {
  //style the quizConatiner id to hide it
  quizContainer.style.display = "none";
});
