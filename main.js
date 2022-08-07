"use strict";

let input = document.querySelector("#output-screen");

let expression = "";

function display(number) {
    expression = expression + number;
    // console.log(expression);
    // console.log(typeof expression);
    input.value = expression;
    //     console.log(input.value);
    //     console.log(typeof input.value);
}

function percent() {
    expression = expression / 100;
    console.log(expression);
    input.value = expression;
}
function Calculate() {
    expression = eval(input.value);
    // console.log(expression);
    // console.log(typeof expression);
    input.value = expression;
}

function Clear() {
    input.value = "";
    expression = "";
}

function del() {
    input.value = input.value.slice(0, -1);

    expression = "";
}

function cos() {
    input.value = Math.cos(input.value);
}

function sin() {
    input.value = Math.sin(input.value);
}

function tan() {
    input.value = Math.tan(input.value);
}

function powof() {
    input.value = Math.pow(input.value, 2);
}

function square() {
    input.value = Math.pow(input.value, 2);
}

function sqrt2() {
    input.value = Math.pow(input.value, 1 / 2);
}

function cubic() {
    input.value = Math.pow(input.value, 3);
}

function sqrt3() {
    input.value = Math.pow(input.value, 1 / 3);
}