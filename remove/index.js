let newRandomNumberButton = document.getElementById("newRandomNumberButton");
let randomNumberTextArea = document.getElementById("randomNumberTextArea");

let removeNumberButton = document.getElementById("removeNumberButton");
let actionTextArea = document.getElementById("actionTextArea");

let allNumbers = document.querySelectorAll("#numberContainer .number");

function selectRandomNumber() {
    allNumbers = document.querySelectorAll("#numberContainer .number");

    for (let number of allNumbers) {
        number.classList.remove("selectedNumber");
    }

    let randomNumer = randomNumber();
    randomNumberTextArea.textContent = randomNumer;

    for (let number of allNumbers) {
        if (number.textContent == randomNumer) {
            number.classList.add("selectedNumber");
        }
    }
}

function removeSelectedNumber() {
    let removedCount = 0;
    for (let number of allNumbers) {
        if (number.classList.contains("selectedNumber")) {
            number.textContent = "X";
            number.classList.remove("selectedNumber");
            number.classList.add("removedNumber");
            removedCount++;
        }
    }
    if (removedCount == 0) {
        actionTextArea.textContent = "Nothing to remove";
    }
    else {
        actionTextArea.textContent = `${randomNumberTextArea.textContent} removed ${removedCount} times`;
    }
}

newRandomNumberButton.addEventListener("click", function () {
    selectRandomNumber();
    actionTextArea.textContent = "-";

})

removeNumberButton.addEventListener("click", function () {
    removeSelectedNumber();
});