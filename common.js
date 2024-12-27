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
let gridOfNumbers = document.querySelector("#gridOfNumbers");

function writeOutNumbers(array) {
    gridOfNumbers.innerHTML = "";

    for (number of array) {
        let numberBox = document.createElement("div");
        numberBox.classList.add("number");
        numberBox.textContent = number;
        gridOfNumbers.appendChild(numberBox);
    }
}

function generateNumbers() {
    document.querySelector("#createNumbers").innerHTML =
        `<label>How many numbers in the grid?</label>` +
        `<input type="text" id="howManyNumbers" size="4" value="95">` +
        `<button id="generateButton">Create</button>`;

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
