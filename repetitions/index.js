let repetitionNumbers = [];

function calculateRepetition() {
    let amountOfNumbers = document.querySelectorAll("#gridOfNumbers .number").length;
    let generatedNumbers = [];

    repetitionNumbers = [];
    for (let i = 0; i <= 99; i++) {
        repetitionNumbers.push({
            number: i,
            repetition: 0,
        })
    }

    for (let i = 0; i < amountOfNumbers; i++) {
        generatedNumbers.push(Number(document.querySelectorAll("#gridOfNumbers .number")[i].textContent));
    }

    for (i = 0; i < amountOfNumbers; i++) {
        for (j = 0; j < repetitionNumbers.length; j++) {
            if (generatedNumbers[i] == repetitionNumbers[j].number) {
                repetitionNumbers[j].repetition += 1;
            }
        }
    }
    console.log(repetitionNumbers);
}
calculateRepetition();

function mostRepeatedNumbers() {
    let input = document.querySelector("#mostRepeatedNumbers");
    input.value = "";
    let mostRepeated = [repetitionNumbers[0]];


    for (i = 0; i < repetitionNumbers.length; i++) {
        for (j = 0; j < mostRepeated.length; j++) {
            if (repetitionNumbers[i].repetition >= mostRepeated[j].repetition) {
                if (repetitionNumbers[i].repetition == mostRepeated[j].repetition) {
                    mostRepeated.push(repetitionNumbers[i]);
                }
                else {
                    mostRepeated = [];
                    mostRepeated.push(repetitionNumbers[i]);
                }
            }
        }
    }
    for (i = 0; i < mostRepeated.length; i++) {
        input.value += mostRepeated[i].number;
        console.log(mostRepeated[i].number)
    }
}

function numbersNotInPlace() {
    let input = document.querySelector("#numbersNotInPlace");
    input.value = "";
    let notInPlace = [];
    for (i = 0; i < repetitionNumbers.length; i++) {
        if (repetitionNumbers[i].repetition == 0) {
            notInPlace.push(repetitionNumbers[i].number);
        }
    }
    console.log(notInPlace);
    let stringOfNotInPlace = notInPlace.join(", ");
    input.value = stringOfNotInPlace;
    // nu splica arrayen och lägg in den i input fältet som för övrigt måste anpasas till att göras större!
}

document.querySelector("button#generateNumbersButton").addEventListener("click", function () {
    calculateRepetition();
    //mostRepeatedNumbers();
    numbersNotInPlace();
});