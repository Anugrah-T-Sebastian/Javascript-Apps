//document.getElementById("count-el").innerText;
//document.getElementById("count-el").textContent;

let countEl = document.getElementById("count-el");  //Returns the count element of the webpage
let saveEl = document.getElementById("previous-en");
let count = 0;

function increment() {
    count = ++count;
    countEl.innerText = count;
}

function save() {
    saveEl.textContent += count + " - ";   //using .textContent because .innerText can skip human unreadable elements e.g. <space>
    count = 0;
    countEl.textContent = count;
}
