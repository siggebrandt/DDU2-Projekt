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
    document.querySelector("#createNumbers").innerHTML = `<label>How many numbers in the grid?</label>` +
        `<input type="text" id="howManyNumbers" size="4">` +
        `<button id="generateButton">Create</button>`;

    document.querySelector("#generateButton").addEventListener("click", function (e) {
        let numberToGenerate = Number(document.querySelector("input#howManyNumbers").value);
        arrayOfRandomNumbers = [];

        while (arrayOfRandomNumbers.length < numberToGenerate) {
            arrayOfRandomNumbers.push(randomNumber());
        }
        console.log(arrayOfRandomNumbers);
    });
}

//function


generateNumbers();

