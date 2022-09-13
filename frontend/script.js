"use strict";

const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelector(".navLink");
const links = document.querySelectorAll(".navLink li");
const mobileLink = document.querySelector(".navLink_Mobile");

navMenu.addEventListener("click", () => {
  // console.log(mobileLink);
  mobileLink.classList.toggle("open");
});

links.forEach((link) => {
  link.classList.toggle("fade");
});

// let company = `[
//   {
//     companyName: "BlackEnergy",
//     Location: "West-London",
//     "Time-zone": "West-African Gmt",
//     Subsidiary: ["ManDef, Perkins, Llyods, Flutter"],
//     isFintech: true,
//   },
//   {
//     name: "Small Startup",
//     numberOfEmployees: 300,
//     ceo: null,
//     ratings: 4.3,
//   }
// ]`;

// console.log(JSON.parse(company));

// lsiten to form submit
