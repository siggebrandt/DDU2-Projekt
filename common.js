function createHomeLink() {
    let homeLink = document.createElement("a");
    homeLink.href = "../index.html";
    homeLink.textContent = "Home";
    return homeLink;
}
document.querySelector("#goHomeLink").appendChild(createHomeLink());

function randomNumber() {
    return Math.floor(Math.random() * 100);
}

let arrayOfRandomNumbers;

document.querySelector("#createNumbers").innerHTML =
    `<label>How many numbers in the grid?</label><input type="text" id="howManyNumbers" size="4" value="95"><button id="generateNumbersButton">Create</button>`;
/*document.querySelector("input#howManyNumbers").focus();
document.querySelector("input#howManyNumbers").setSelectionRange(2, 2);*/

function generateNumbers() {
    let numberToGenerate = Number(document.querySelector("input#howManyNumbers").value);
    let gridOfNumbers = document.querySelector("#gridOfNumbers");
    arrayOfRandomNumbers = [];
    gridOfNumbers.innerHTML = "";

    while (arrayOfRandomNumbers.length < numberToGenerate) {
        arrayOfRandomNumbers.push(randomNumber());
    }

    for (number of arrayOfRandomNumbers) {
        let numberBox = document.createElement("div");
        numberBox.classList.add("number");
        numberBox.textContent = number;
        gridOfNumbers.appendChild(numberBox);
    }
}

document.querySelector("#generateNumbersButton").addEventListener("click", function () {
    generateNumbers();
});

generateNumbers();