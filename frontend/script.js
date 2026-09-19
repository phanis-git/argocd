const button = document.getElementById("changeButton");

const title = document.getElementById("title");

const message = document.getElementById("message");


button.addEventListener("click", function () {

    title.textContent = "Hello Phani!";

    message.textContent =
        "JavaScript changed this content dynamically.";

});