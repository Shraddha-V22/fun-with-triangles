const sideInputs = document.querySelectorAll(".side-input");
const calHypoBtn = document.querySelector("#cal-hypo-btn");
const outputMsg = document.querySelector("#output");

function sumOfAnglesSquare(a, b) {
    var sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    var hypotenuseSquare = sumOfAnglesSquare(Number(sideInputs[0].value), Number(sideInputs[1].value));
    var hypotenuseLength = Math.sqrt(hypotenuseSquare);
    
    outputMsg.innerText = "The Length of Hypotenuse is " + hypotenuseLength + ".";
}

calHypoBtn.addEventListener("click", calculateHypotenuse);
