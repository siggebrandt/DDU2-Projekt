function refreshNumbers() {
    let sumOfAllNumbers = 0;
    for (let number of arrayOfRandomNumbers) {
        sumOfAllNumbers += number;
    }
    document.querySelector("input#sumOfAllNumbers").value = sumOfAllNumbers;

    for (let numberDiv of document.querySelectorAll("#gridOfNumbers .number")) {
        numberDiv.addEventListener("click", function () {
            if (numberDiv.className == "number selectedNumber") {
                numberDiv.classList.remove("selectedNumber");
                sumOfSelectedNumbers -= Number(numberDiv.textContent);
                updateSelectedNumbersField();
            }
            else {
                numberDiv.classList.add("selectedNumber");
                sumOfSelectedNumbers += Number(numberDiv.textContent);
                updateSelectedNumbersField();
            }
        });
    }
}

let sumOfSelectedNumbers = 0;

function updateSelectedNumbersField() {
    if (sumOfSelectedNumbers == 0) {
        document.querySelector("input#sumOfSelectedNumbers").value = "-";
    }
    else {
        document.querySelector("input#sumOfSelectedNumbers").value = sumOfSelectedNumbers;
    }
}

refreshNumbers();

document.querySelector("#generateNumbersButton").addEventListener("click", function () {
    refreshNumbers();
    sumOfSelectedNumbers = 0;
    updateSelectedNumbersField();
});


document.querySelector("button#resetSelectedNumbersButton").addEventListener("click", function () {
    for (let selectedNumberDiv of document.querySelectorAll("#gridOfNumbers .number.selectedNumber")) {
        selectedNumberDiv.classList.remove("selectedNumber");
    }
    sumOfSelectedNumbers = 0;
    updateSelectedNumbersField();
});