function createHomeLink() {
    let homeLink = document.createElement("a");
    homeLink.href = "../index.html";
    homeLink.textContent = "Home";
    return homeLink;
}

let goHome = document.querySelector("#goHomeLink");
goHome.appendChild(createHomeLink());