let myLeads = ["ww", "le", "pizza"];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEL = document.getElementById("ul-el");
const pEl = document.getElementById("p-el");
const hEl = document.getElementById("h-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(inputEl.value);
    console.log(myLeads);
    // for(let i = 0; i < myLeads.length; i += 1) {
    //     ulEL.textContent += myLeads[i];
    //     pEl.textContent += myLeads[i];
    // }
})

function displayList() {
    for(let i = 0; i < myLeads.length; i++) {
        ulEL.innerHTML += "<li>" + myLeads[i] + "</li>"
    }
}

for(let i = 0; i < myLeads.length; i++) {
    ulEL.innerHTML += "<li>" + myLeads[i] + "</li>";
}