let circle = document.querySelector(".circle");

let square = document.querySelector(".square");

let code = document.querySelector(".code");

let btn = document.querySelector(".btn1");


// Color select hone par
square.addEventListener("input", function () {

    let color = square.value;

    circle.style.backgroundColor = color;

    

    code.innerHTML = color;

    document.querySelector(".mainsection").style.backgroundColor = color;

});


// Copy Color Code
btn.addEventListener("click", function () {

    navigator.clipboard.writeText(code.innerHTML);

    btn.innerHTML = "Copied!";

});