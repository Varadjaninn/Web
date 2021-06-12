var chatbox = document.querySelector('#chatbox');
var submitButton = document.querySelector('#submitmsg');

function addMessages() {
    var userMsg = document.querySelector("#usermsg");

    var newMsg = document.createElement("p");
    var text = document.createTextNode(userMsg.value);

    newMsg.appendChild(text);
    chatbox.appendChild(newMsg);

    document.querySelector("input").value = "";
}

submitButton.addEventListener('click', addMessages);