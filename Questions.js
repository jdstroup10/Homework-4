

var questions = [
	{
		question: "Which of these is not an animal?",
		choiceA: "Tree",
        choiceB: "Dog",
        choiceC: "Cat",
        correct: "A"
	},
	{
		question: "Which of these is not a color?",
		choiceA: "Blue",
        choiceB: "Red",
        choiceC: "Tree",
        correct: "C"
    },
    {
		question: "Which of these is a game?",
		choiceA: "Cat",
        choiceB: "Basketball",
        choiceC: "Tree",
        correct: "B"
	},
];

let lastQuestionIndex = questions.length-1;
let runningQuestionIndex = 0;
//Creating function to render questions
function renderQuestion(){
    let q =questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question+ "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

}

//runningQuestionIndex = 0;
//renderQuestion()
// runningQuestionIndex++ and then calling the renderQuestion function again displays the next question
//runningQuestionIndex++
//renderQuestion()

//runningQuestionIndex++
//renderQuestion()

//Creating function to show score counter progress

function progressRender(){
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class='count'id=" + qIndex + "></div>";

    }

}
function answerIsCorrect(){
    document.getElementById("progress").textContent = "CORRECT!";
    score++;
    document.getElementById("scoreCount").textContent = "Here is your current score " + score;
    
    //If answer is correct add 1 to score
    
}

function answerIsWrong(){
    document.getElementById("progress").textContent = "INCORRECT!";
}

//Function to check the answer goes here

let score = 0;

function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        answerIsCorrect();

    } else{
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
        //count = 0;
        runningQuestionIndex++;
        renderQuestion();
    } else{
        //scoreRender();
        //Remember to write this function
    }
}


