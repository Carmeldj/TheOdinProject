// Add a red paragraph

const container = document.querySelector("#container");

const para = document.createElement("p");

para.textContent = "Hey I'm red";

para.style.color = "red";

container.appendChild(para);

// Add a blue h3

const header3 = document.createElement("h3");

header3.style.color = "blue";

header3.textContent = "I'm a blue h3";

container.appendChild(header3);

// Add a div with blue border and pink background color

const div = document.createElement("div");

// Add th style to the div

div.style.backgroundColor = "pink";

div.style.border = "1px solid black";

// Add ehader and paragraph

const header1 = document.createElement("h1");

header1.textContent = "I'm in a div";

const para2 = document.createElement("p");

para2.textContent = "ME TOO";

// Append alls parts

div.appendChild(header1);

div.appendChild(para2);

container.appendChild(div);

// Work on event listener
/*
const btn = document.querySelector("#btn");

btn.onclick = () => alert("Hello World");*/

/*const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});*/

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

/*const btn = document.querySelector("#btn");

btn.onclick = alertFunction;*/

//btn.addEventListener("click", alertFunction);

/*btn.addEventListener("click", function (e) {
  console.log(e);
});*/

//btn.addEventListener("click", function (e) {
//  console.log(e.target);
//});

//btn.addEventListener("click", function (e) {
//e.target.style.background = "blue";
//});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
