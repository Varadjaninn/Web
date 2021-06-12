/*
var firstButtonNode = document.getElementById('first');
var bodyNode = document.querySelector('body');
var isTurnedOn = true;

function changeBackround() {
    bodyNode.classList.toggle('toggleColor')
};

var secondButtonNode = document.getElementById('second');

firstButtonNode.addEventListener('click', changeBackround);

secondButtonNode.addEventListener('click', function () {
    if (isTurnedOn) {
        isTurnedOn = false;
        secondButtonNode.textContent = "Turn On"
        firstButtonNode.removeEventListener('click', changeBackround);
    } else {
        isTurnedOn = true;
        secondButtonNode.textContent = "Turn off"
        firstButtonNode.addEventListener('click', changeBackround);
    }
});
*/

var bodyNode = document.querySelector('body');
var firstButtonNode = document.getElementById('first');
var secondButtonNode = document.getElementById('second');

function changeBackround() {
    bodyNode.classList.toggle('toggleColor')
};
var interval = undefined;


function automaticToggle(event) {
    if(!interval) {
        secondButtonNode.textContent = 'Turn off';
        interval = setInterval(changeBackround, 500);
    } else {
        secondButtonNode.textContent = 'Turn on';
        clearInterval(interval);
        interval = undefined;
    }
    
}

secondButtonNode.addEventListener('click', automaticToggle);