function showRegistrationForm() {
    document.getElementById("modal").setAttribute("style", "display: flex;");
    document.getElementById("register").setAttribute("style", "display: block;");
    document.getElementById("login").setAttribute("style", "display: none;");
}

function showLoginForm() {
    document.getElementById("modal").setAttribute("style", "display: flex;");
    document.getElementById("login").setAttribute("style", "display: block;");
    document.getElementById("register").setAttribute("style", "display: none;"); 
}

function backButton () {
    document.getElementById("modal").setAttribute("style", "display: none;");
}