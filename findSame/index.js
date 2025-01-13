let copiesFoundText = document.getElementById("copiesFoundText");
let resetButton = document.getElementById("resetButton");

let allNumbers = document.querySelectorAll("#numberContainer .number");

function resetSelected() {
    for (let numberKey of allNumbers) {
        if (numberKey.classList.contains("selectedNumber")) {
            numberKey.classList.remove("selectedNumber");
        }
    }
}

function findCopies(number) {
    resetSelected();
    let copiesFound = 0;
    for (let numberKey of allNumbers) {
        if (numberKey.textContent == number) {
            copiesFound++;
            numberKey.classList.add("selectedNumber");
        }
    }
    copiesFoundText.textContent = `${copiesFound} copies of the number ${number}`;
}

function createEventListeners() {
    allNumbers = document.querySelectorAll("#numberContainer .number");
    for (let i = 0; i < allNumbers.length; i++) {
        allNumbers[i].addEventListener("click", function () {
            findCopies(allNumbers[i].textContent);
        });
    }
}
createEventListeners();

resetButton.addEventListener("click", function () {
    copiesFoundText.textContent = "Click on a number to find copies";
    resetSelected();
});

document.querySelector("#generateNumbersButton").addEventListener("click", function () {
    createEventListeners();
});