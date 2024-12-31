let arrayOfNumberRepetitions = [];
let totalNumbers = document.querySelectorAll("#numberContainer .number").length;

function joinArray(array) {
    return array.join(", ")
}

function calculateRepetitions() {
    let currentGeneratedNumbers = [];
    arrayOfNumberRepetitions = [];

    for (let i = 0; i <= 99; i++) {
        arrayOfNumberRepetitions.push({
            number: i,
            repetition: 0,
        })
    }

    for (let i = 0; i < totalNumbers; i++) {
        currentGeneratedNumbers.push(
            Number(document.querySelectorAll("#numberContainer .number")[i].textContent)
        );
    }

    for (let i = 0; i < currentGeneratedNumbers.length; i++) {
        for (j = 0; j < arrayOfNumberRepetitions.length; j++) {
            if (currentGeneratedNumbers[i] == arrayOfNumberRepetitions[j].number) {
                arrayOfNumberRepetitions[j].repetition += 1;
            }
        }
    }
}

function mostRepeatedNumbers() {
    let textField = document.querySelector("#mostRepeatedNumbers");
    textField.textContent = "";

    let mostRepeated = [];
    let highestRepetitionCount = 0;

    for (let i = 0; i < arrayOfNumberRepetitions.length; i++) {
        if (arrayOfNumberRepetitions[i].repetition > highestRepetitionCount) {
            mostRepeated = [arrayOfNumberRepetitions[i]];
            highestRepetitionCount = arrayOfNumberRepetitions[i].repetition;
        }
        else if (arrayOfNumberRepetitions[i].repetition == highestRepetitionCount) {
            mostRepeated.push(arrayOfNumberRepetitions[i]);
        }
    }

    let mostRepeatedNumbersList = [];
    for (let i = 0; i < mostRepeated.length; i++) {
        mostRepeatedNumbersList.push(mostRepeated[i].number);
    }
    textField.textContent += `${joinArray(mostRepeatedNumbersList)} (Repeated ${highestRepetitionCount} times)`;

    for (let i = 0; i < totalNumbers; i++) {
        let currentNumberElement = document.querySelectorAll("#numberContainer .number")[i];
        if (mostRepeatedNumbersList.includes(Number(currentNumberElement.textContent))) {
            currentNumberElement.classList.add("selectedNumber");
        }
    }
}

function findMissingNumbers() {
    let textField = document.querySelector("#numbersNotInPlace");
    textField.textContent = "";

    let missingNumbers = [];
    for (let i = 0; i < arrayOfNumberRepetitions.length; i++) {
        if (arrayOfNumberRepetitions[i].repetition == 0) {
            missingNumbers.push(arrayOfNumberRepetitions[i].number);
        }
    }
    textField.textContent = joinArray(missingNumbers);
    if (textField.textContent == "") {
        textField.textContent = "All numbers are in place.";
    }
}

calculateRepetitions();
mostRepeatedNumbers();
findMissingNumbers();

document.querySelector("button#generateNumbersButton").addEventListener("click", function () {
    totalNumbers = document.querySelectorAll("#numberContainer .number").length;
    console.log(totalNumbers);
    calculateRepetitions();
    mostRepeatedNumbers();
    findMissingNumbers();
});