
export function generateMenu() {
    const pageContent = [];
    let itemAmount = 0;
    const content = document.querySelector("#content");
    const sides = document.createElement("h2");
    sides.classList.add("sides-header");
    sides.innerText = "Sides";
    pageContent.push(sides);
    generateMenuEntry(pageContent, itemAmount, "Mozzarella Sticks");
    itemAmount++;
    generateMenuEntry(pageContent, itemAmount, "French Fries");
    itemAmount++;
    const mainCourses = document.createElement("h2");
    mainCourses.classList.add("main-courses-header");
    mainCourses.innerText = "Pizzas & Calzones";
    pageContent.push(mainCourses);
    generateMenuEntry(pageContent, itemAmount, "Cheese Pizza");
    itemAmount++;
    generateMenuEntry(pageContent, itemAmount, "Pepperoni Pizza");
    itemAmount++;
    generateMenuEntry(pageContent, itemAmount, "House Speciality Pizza");
    itemAmount++;
    generateMenuEntry(pageContent, itemAmount, "Buffalo Chicken Calzone");
    itemAmount++;
    const beverages = document.createElement("h2");
    beverages.innerText = "Beverages";
    pageContent.push(beverages);
    generateMenuEntry(pageContent, itemAmount, "Soda");
    itemAmount++;
    generateMenuEntry(pageContent, itemAmount, "Lemonade");
    itemAmount++;

    for (let element of pageContent) {
        content.appendChild(element);
    }

}

function generateMenuEntry(pageContent, itemAmount, text) {
    let row = document.createElement("div");
    row.classList.add("row");
    let menuOption = document.createElement("div");
    menuOption.classList.add("menu-entry");
    menuOption.classList.add(`item-${itemAmount}`);
    menuOption.classList.add("item");
    let menuOptionText = document.createElement("div");
    menuOptionText.classList.add("menu-text");
    menuOptionText.innerText = text;
    menuOption.appendChild(menuOptionText);
    row.appendChild(menuOption);
    pageContent.push(row);
}