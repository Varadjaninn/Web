function alertText () {
    alert(document.getElementsByTagName("ul")[0].getElementsByTagName("li")[0].textContent)
}
alertText();


function changeText(text) {
    
    var unorderedList = document.querySelector('ul');
    var lastLiElement = unorderedList.lastElementChild;

    lastLiElement.textContent = text;
}
changeText('This text will replace the existing one in last li element');