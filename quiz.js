const quizForm = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const scoreOutput = document.querySelector("#output");

const rightAnswers = ["90°", "right angled", "250 sq cm", "180 degrees", "Two sides are equal"];

function calculateScore() {
    var score=0;
    var index=0;
    const formResults = new FormData(quizForm);
    for(var values of formResults.values()) {
        if(values === rightAnswers[index]) {
            score=score+1;
        }
        index=index+1;
    }  
    scoreOutput.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calculateScore);