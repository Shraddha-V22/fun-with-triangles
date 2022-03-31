const lengthInput = document.querySelectorAll(".length-input");
const calculateAreaBtn = document.querySelector("#calculate-area-btn");
const areaOutput = document.querySelector("#output");

function areaCalculation(base, height) {
    var area = (base*height)/2;
    return area;
}

function calculateTriangleArea() {
    var triangleArea = areaCalculation(Number(lengthInput[0].value), Number(lengthInput[1].value));
    
    areaOutput.innerText = "Area of the Triangle is " + triangleArea + "."
}

calculateAreaBtn.addEventListener("click", calculateTriangleArea);