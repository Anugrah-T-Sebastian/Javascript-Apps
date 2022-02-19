let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEL = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads);
}

function render(leads) {
    let listItems = "";
    for(let i = 0; i < leads.length; i++) {
        listItems += `
                        <li>
                            <a target="_blank" href="${ leads[i] }">${ leads[i] }</a>
                        </li>
                    `
    }
    ulEL.innerHTML = listItems;
}


tabBtn.addEventListener("click", function() {
    console.log("SAVE TAB clicked");
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads);
    });
})

deleteBtn.addEventListener("dblclick", function() {
    console.log("Leads cleared");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})

