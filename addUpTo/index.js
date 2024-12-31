let addUpToNumberInput = document.getElementById("addUpToNumberInput");
let FindCellsThatAddUpButton = document.getElementById("FindCellsThatAddUpButton");

let allNumbers = document.querySelectorAll("#numberContainer .number");

function findCellsThatAddUpToNumber(numberToFind) {
    let cellsAddUpp = false;
    for (let i = 0; i < allNumbers.length; i++) {
        for (let j = i + 1; j < allNumbers.length; j++) {
            if (Number(allNumbers[i].textContent) + Number(allNumbers[j].textContent) == numberToFind) {
                cellsAddUpp = true;
                allNumbers[i].classList.add("highlightedNumber");
                allNumbers[j].classList.add("highlightedNumber");
                break;
            }
        }
        if (cellsAddUpp) { break; }
    }
}

FindCellsThatAddUpButton.addEventListener("click", function () {
    allNumbers = document.querySelectorAll("#numberContainer .number");
    for (number of allNumbers) {
        number.classList.remove("highlightedNumber");
    }
    findCellsThatAddUpToNumber(addUpToNumberInput.value)
});