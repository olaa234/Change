"use strict";
// console.log(document.title);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].innercontent = "Bingo";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// console.log(document.spans);

const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelector(".navLink");
const links = document.querySelectorAll(".navLink li");
console.log(links);

navMenu.addEventListener("click", () => {
  navLink.classList.toggle("open");
});

links.forEach((link) => {
  link.classList.toggle("fade");
});
