function createHomeLink() {
    let homeLink = document.createElement("a");
    homeLink.href = "../index.html";
    homeLink.textContent = "Home";
    return homeLink;
}
let homeLink = document.querySelector("#goHomeLink");

if (homeLink) {
    homeLink.appendChild(createHomeLink());
}

function randomNumber() {
    return Math.floor(Math.random() * 99);
}

let arrayOfRandomNumbers;

function generateNumbers() {
    document.querySelector("#createNumbers").innerHTML =
        `<label>How many numbers in the grid?</label>` +
        `<input type="text" id="howManyNumbers" size="4">` +
        `<button id="generateButton">Create</button>`;

    let gridOfNumbers = document.querySelector("#gridOfNumbers");

    document.querySelector("#generateButton").addEventListener("click", function (e) {
        let numberToGenerate = Number(document.querySelector("input#howManyNumbers").value);
        arrayOfRandomNumbers = [];
        gridOfNumbers.innerHTML = "";

        while (arrayOfRandomNumbers.length < numberToGenerate) {
            arrayOfRandomNumbers.push(randomNumber());
        }
        console.log(arrayOfRandomNumbers);

        for (number of arrayOfRandomNumbers) {
            let numberBox = document.createElement("div");
            numberBox.classList.add("number");
            numberBox.textContent = number;
            gridOfNumbers.appendChild(numberBox);
        }
    });
}



generateNumbers();
