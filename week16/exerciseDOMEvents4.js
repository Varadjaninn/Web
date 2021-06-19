var field = document.querySelector('.field');
var player = document.querySelector('.player');
var button = document.querySelector('.stop');
var movement = true;

field.addEventListener('click', function (event){
    if(movement === true) {
    player.style.top = (event.clientY) +'px';
    player.style.left = (event.clientX) +'px';
    }
})

button.addEventListener('click', function() {
    if(movement === true) {
        movement = false;
        button.textContent = 'Start Moving';
    } else {
        movement = true;
        button.textContent = 'Stop Moving';
    }
})
