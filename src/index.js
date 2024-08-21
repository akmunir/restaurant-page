import { generateHomePage } from "./homepage.js";
import "./homepage.css";
import "./menu.css";
import { generateMenu } from "./menu.js";
import { generateAbout } from "./about.js";

console.log("hello?");
generateHomePage();

const content = document.querySelector("#content");
const nav = document.querySelector("nav");
const isActive = [true, false, false];
nav.addEventListener("click", (event)=> {
    if (event.target.classList.contains("home")) {
        if (!isActive[0]) {
            content.innerHTML = " ";
            generateHomePage()
            isActive.fill(false);
            isActive[0] = !isActive[0];
        }
    } else if (event.target.classList.contains("menu")) {
        if (!isActive[1]) {
            content.innerHTML = " ";
            generateMenu();
            isActive.fill(false);
            isActive[1] = !isActive[1];
        }
    } else if (event.target.classList.contains("about")) {
        if (!isActive[2]) {
            content.innerHTML = " ";
            generateAbout();
            isActive.fill(false);
            isActive[2] = !isActive[2];
        }
    }
;})

