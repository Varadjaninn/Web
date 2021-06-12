var buttonNode = document.querySelector('button');
var bodyNode = document.querySelector('body');

function changeBackround() {
    buttonNode.onclick = function () {
        bodyNode.classList.toggle('toggleColor')
    };
};
changeBackround();
