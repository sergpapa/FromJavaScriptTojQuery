console.log('Hello World');


let sections = document.querySelector("section");
console.log(sections);

sections = document.querySelectorAll("section");
console.log(sections);

let lead = document.querySelector(".lead");

let article = document.getElementById("home-page");
console.log(article.children);
console.log(article.parentElement);

console.log(sections.nextElementSibling);
console.log(sections.firstElementChild);

let listItem = document.createElement("li");
listItem.classList.add("last");
listItem.style.backgroundColor = "pink";

let a = document.createElement("a");
a.textContent = "four";
a.style.color = "white";

listItem.appendChild(a);
console.log(listItem);

let uls = document.getElementsByTagName("ul");

let ul = uls[0];
ul.appendChild(listItem);

let list = ul.getElementsByTagName("li");
let firstLi = list[0];
let lastLi = list[3];

firstLi.classList.remove("active");
ul.insertBefore(lastLi, firstLi);

for (let i=0; i < list.length; i++) {
    list[i].style.backgroundColor = "pink";
}
