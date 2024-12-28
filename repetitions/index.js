// function calculateRepetitionOfNumber(number) {
//     let repetition = 0;
//     for (let i = 0; i < 95; i++) {
//         if (number === i) {
//             repetition++;
//         }
//     }
//     return repetition;
// }

function checkNumbers() {
    let numbers = [];
    for (let i = 0; i < document.querySelectorAll("#gridOfNumbers .number").length; i++) {
        numbers.push(Number(document.querySelectorAll("#gridOfNumbers .number")[i].textContent))
    }
    console.log(numbers);
    // loopa igenom varje siffra från 0 - 95 och kolla hur många gånger varje siffra finns i arrayen;
    // array av objekt med siffra och hur många gånger den finns i arrayen
    // hur håller jag koll på hur många det finns av varje siffra?
};

document.querySelector("button#generateNumbersButton").addEventListener("click", function () {
    checkNumbers();
});