// go to service

function goService() {

  window.location.href = "service.html";

}


// back button

function goBack() {

  window.history.back();

}


// welcome

window.onload = function () {

  alert("Welcome to Zota Home");

};



// clock

setInterval(function () {

  let d = new Date();

  document.getElementById("clock").innerText =
    d.toLocaleTimeString();

}, 1000);



// typing

let text = "Web Design & Development";

let i = 0;

function typing() {

  if (i < text.length) {

    document.getElementById("typing").innerHTML += text[i];

    i++;

    setTimeout(typing, 100);

  }

}

typing();



// theme

let mode = document.getElementById("modeBtn");

mode.onclick = function () {

  document.body.classList.toggle("dark");

};



// card actions

function card1() {

  alert("Learn HTML CSS JS");

}


function card2() {

  alert("Build real projects");

}


function card3() {

  alert("Become Pro Developer");

}