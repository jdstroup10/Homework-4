const playButton = document.querySelector("#play");
const timeEl = document.querySelector(".time");
const subHeaderText = document.getElementById("subHeader");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const progress = document.getElementById("progress"); 
const scoreCount = document.getElementById("scoreCount");
const finalScore = document.getElementById("finalScore");


const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");






var secondsLeft = 30;

function startTimer() {
  renderQuestion()
  // Placing the function from questions.js here renders the first question upon clicking start button
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " Seconds Left";
      subHeaderText.textContent = "Go!";

  
      if(secondsLeft === 0) {
        
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

  function sendMessage()  {
      timeEl.textContent = "Time up!";
      document.getElementById("finalScore").textContent = "Your final score is: " + score;
      document.getElementById("question").textContent = "";
      document.getElementById("progress").textContent = "";
      document.getElementById("scoreCount").textContent = "";
      document.getElementById("A").textContent = "";
      document.getElementById("B").textContent = "";
      document.getElementById("C").textContent = "";
      //Move to score page

  }



//function startTimer() {
  //  console.log("hello");
    //document.getElementById("play").innerHTML = "Hello";
    //setTime();
//}

playButton.addEventListener("click", startTimer);