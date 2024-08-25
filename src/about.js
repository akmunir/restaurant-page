export function generateAbout() {
    console.log("hello");
    const content = document.querySelector("#content");
    const pageContent = [];
    const contact = document.createElement("h2");
    contact.innerText = "Contact Us!";
    contact.classList.add("contact-header");
    pageContent.push(contact);



    for (let element of pageContent) {
        content.appendChild(element);
    }
}