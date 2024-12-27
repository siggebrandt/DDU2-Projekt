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



function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

console.log(randomNumber(100))