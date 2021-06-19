var field = document.querySelector(".wrapper");
var mario = document.querySelector(".mario_stands");
var body = document.body;
var x = 0;
var movement;

window.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        if (mario.getAttribute("src") === "./mario.png") {
            mario.removeAttribute("src");
            mario.setAttribute("src", "./mario_running.gif");
            movement = setInterval(function () {
                x -= 1;
                field.style.backgroundPosition = x + "px bottom";
            }, 1);
        }
    }
});

window.addEventListener("keyup", function (e) {
    if (e.key == "ArrowRight") {
        mario.removeAttribute("src");
        mario.setAttribute("src", "./mario.png");
        clearInterval(movement);
    }
});