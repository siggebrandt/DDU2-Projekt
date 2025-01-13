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

document.querySelector("#createNumbers").innerHTML = `
    <label>How many numbers in the grid?</label>
    <input type="text" id="howManyNumbers" size="4" value="95">
    <button id="generateNumbersButton">Create</button>`;

function generateNumbers() {
    let numberToGenerate = Number(document.querySelector("input#howManyNumbers").value);
    let numberContainer = document.querySelector("#numberContainer");
    arrayOfRandomNumbers = [];
    numberContainer.innerHTML = "";

    while (arrayOfRandomNumbers.length < numberToGenerate) {
        arrayOfRandomNumbers.push(randomNumber());
    }

    for (number of arrayOfRandomNumbers) {
        let numberBox = document.createElement("div");
        numberBox.classList.add("number");
        numberBox.textContent = number;
        numberContainer.appendChild(numberBox);
    }
}

document.querySelector("#generateNumbersButton").addEventListener("click", function () {
    generateNumbers();
});

generateNumbers();