let fillClearedButton = document.getElementById("fillClearedButton");
let allNumbers = document.querySelectorAll("#numberContainer .number");

function clearNumber(element) {
    element.innerHTML = randomNumber();
    if (element.classList.contains("clearedNumber")) {
        element.classList.remove("clearedNumber");
    }
    else {
        element.classList.add("clearedNumber");
    }
}

function createEventListeners() {
    allNumbers = document.querySelectorAll("#numberContainer .number");
    for (let i = 0; i < allNumbers.length; i++) {
        allNumbers[i].addEventListener("click", function () {
            clearNumber(allNumbers[i]);
        });
    }
}
createEventListeners();

document.querySelector("#generateNumbersButton").addEventListener("click", function () {
    createEventListeners();
});

fillClearedButton.addEventListener("click", function () {
    allNumbers = document.querySelectorAll("#numberContainer .number");
    for (let numberKey of allNumbers) {
        if (numberKey.classList.contains("clearedNumber")) {
            numberKey.classList.remove("clearedNumber");
        }
    }
})