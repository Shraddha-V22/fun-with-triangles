const quizForm = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputMsg = document.querySelector("#output");

const rightAnswers = ["90°", "right angled"];

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
    outputMsg.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calculateScore);