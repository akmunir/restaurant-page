export function generateMenu() {
    const content = document.querySelector("#content");
    const pageContent = [];
    const sides = document.createElement("h2");
    sides.classList.add("sides-header");
    sides.innerText = "Sides";
    pageContent.push(sides);
    const mainCourses = document.createElement("h2");
    mainCourses.classList.add("main-courses-header");
    mainCourses.innerText = "Pizzas & Calzones";
    pageContent.push(mainCourses);
    const beverages = document.createElement("h2");
    beverages.innerText = "Beverages";
    pageContent.push(beverages);


    for (let element of pageContent) {
        content.appendChild(element);
    }

}