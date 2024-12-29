let repetitionNumbers = [];
let amountOfNumbers = document.querySelectorAll("#numberContainer .number").length;

function calculateRepetition() {
    let generatedNumbers = [];

    repetitionNumbers = [];
    for (let i = 0; i <= 99; i++) {
        repetitionNumbers.push({
            number: i,
            repetition: 0,
        })
    }

    for (let i = 0; i < amountOfNumbers; i++) {
        generatedNumbers.push(Number(document.querySelectorAll("#numberContainer .number")[i].textContent));
    }

    for (let i = 0; i < amountOfNumbers; i++) {
        for (j = 0; j < repetitionNumbers.length; j++) {
            if (generatedNumbers[i] == repetitionNumbers[j].number) {
                repetitionNumbers[j].repetition += 1;
            }
        }
    }
}

function mostRepeatedNumbers() {
    let textField = document.querySelector("#mostRepeatedNumbers");
    textField.textContent = "";

    let mostRepeatedNumbersArray = [];
    let highestRepetition = 0;

    for (let i = 0; i < repetitionNumbers.length; i++) {
        if (repetitionNumbers[i].repetition > highestRepetition) {
            mostRepeatedNumbersArray = [repetitionNumbers[i]];
            highestRepetition = repetitionNumbers[i].repetition;
        }
        else if (repetitionNumbers[i].repetition == highestRepetition) {
            mostRepeatedNumbersArray.push(repetitionNumbers[i]);
        }
    }

    let textFieldNumbers = [];
    for (let i = 0; i < mostRepeatedNumbersArray.length; i++) {
        textFieldNumbers.push(mostRepeatedNumbersArray[i].number);
    }
    textField.textContent += `${textFieldNumbers.join(", ")} (Repeated ${highestRepetition} times)`;

    for (let i = 0; i < amountOfNumbers; i++) {
        for (let j = 0; j < mostRepeatedNumbersArray.length; j++) {
            if (document.querySelectorAll("#numberContainer .number")[i].textContent == textFieldNumbers[j]) {
                document.querySelectorAll("#numberContainer .number")[i].classList.add("selectedNumber");
            }
        }

    }
}

function numbersNotInPlace() {
    let textField = document.querySelector("#numbersNotInPlace");
    textField.textContent = "";
    let notInPlace = [];
    for (let i = 0; i < repetitionNumbers.length; i++) {
        if (repetitionNumbers[i].repetition == 0) {
            notInPlace.push(repetitionNumbers[i].number);
        }
    }
    let stringOfNotInPlace = notInPlace.join(", ");
    textField.textContent = stringOfNotInPlace;
    if (textField.textContent == "") {
        textField.textContent = "All numbers are in place.";
    }
}

calculateRepetition();
mostRepeatedNumbers();
numbersNotInPlace();

document.querySelector("button#generateNumbersButton").addEventListener("click", function () {
    calculateRepetition();
    mostRepeatedNumbers();
    numbersNotInPlace();
});

// fungerar inte riktigt som det ska