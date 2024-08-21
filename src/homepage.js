export function generateHomePage() {
    const content = document.querySelector("#content");
    console.log(content);
    const pageContent = [];
    const hook = document.createElement("p");
    hook.classList.add("hook");
    hook.innerText = "High quality pizza at an affordable cost";
    pageContent.push(hook);
    const testimonial = document.createElement("p");
    testimonial.classList.add("testimonial");
    testimonial.innerText = "Truly a life changing experience. I ate 3 boxes of their house special pizza in one sitting, its just that good!";
    pageContent.push(testimonial);
    const hours = document.createElement("ul");
    hours.classList.add("hours");
    const sunday = document.createElement("li");
    sunday.innerText = "Sunday: Closed"
    hours.appendChild(sunday);
    const mon = document.createElement("li");
    mon.innerText = "Monday: 8am-6pm";
    hours.appendChild(mon);
    const tues = document.createElement("li");
    tues.innerText = "Tuesday: 8am-6pm";
    hours.appendChild(tues);
    const wed = document.createElement("li");
    wed.innerText = "Wednesday: 8am-6pm";
    hours.appendChild(wed);
    const thurs = document.createElement("li");
    thurs.innerText = "Thursday: 8am-6pm";
    hours.appendChild(thurs);
    const friday = document.createElement("li");
    friday.innerText = "Friday: 8am-10pm";
    hours.appendChild(friday);
    const sat = document.createElement("li");
    sat.innerText = "Saturday: 8am-pm";
    hours.appendChild(sat);
    pageContent.push(hours);
    const location = document.createElement("p");
    location.classList.add("location")
    location.innerText = "Located at 941 BoardFish Street NH.";
    pageContent.push(location);
    for (let element of pageContent) {
        content.appendChild(element);
    }
}