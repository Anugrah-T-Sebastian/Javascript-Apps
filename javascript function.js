//CSS:
//# -> identifies element's by it's ID
//. -> identifies element by it's CLASS

/*
1. document.getElementById("count-el").innerText;

2. document.getElementById("count-el").textContent;  :Using .textContent because .innerText can skip human unreadable elements e.g. <space>

3. document.querySelector("#sum-el") OR document.querySelector(".sum-el"); :Pass in the CSS selector

4. 
inputBtn.addEventListener("click", function() {
    console.log("Button cliked from addEventListener");
})

5. inputEl.value :To get value from an input field. The inputEl contains the input HTML object {const inputEl = document.getElementById("input-el");}

6. ulEL.innerHTML   :All the string in the .innerHTML is treated as HTML
for(let i = 0; i < myLeads.length; i++) {
    ulEL.innerHTML += "<li>" + myLeads[i] + "</li>";
}
*/