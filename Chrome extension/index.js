let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEL = document.getElementById("ul-el");
const pEl = document.getElementById("p-el");
const hEl = document.getElementById("h-el");

localStorage.setItem("myLeads", "www.examplelead.com");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();

    console.log(localStorage.getItem("myLeads"));
})

function renderLeads() {
    let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
    let listItems = "";
    for(let i = 0; i < leadsFromLocalStorage.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        listItems += `
                        <li>
                            <a target="_blank" href="${ leadsFromLocalStorage[i]}">${ leadsFromLocalStorage[i] }</a>
                        </li>
                    `
    }
    ulEL.innerHTML = listItems;
}





/*------------------------------------------------------------------------------------------------------------*/
// for(let i = 0; i < myLeads.length; i++) {           //Code 1.1
//     ulEL.innerHTML += "<li>" + myLeads[i] + "</li>";
// }


// for(let i = 0; i < myLeads.length; i++) {           //Code 1.2: Same as 1.1 with different method
//     //Above code can be broken down into 1)Create element 2)set text content 3)append to ul
//     const li = document.createElement("li");
//     li.textContent = myLeads[i];
//     ulEL.append(li);
// }
/*--------------------------------------------------------------------------------------------------------------*/