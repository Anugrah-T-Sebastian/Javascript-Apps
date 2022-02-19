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
for(let i = 0; i < myLeads.length; i++) {           //Code 1.1
    ulEL.innerHTML += "<li>" + myLeads[i] + "</li>";
}

7. document.createElement() :Used to create DOM elements
for(let i = 0; i < myLeads.length; i++) {           //Code 1.2: Same as 1.1 with different method
    //Above code can be broken down into 1)Create element 2)set text content 3)append to ul
    const li = document.createElement("li");
    li.textContent = myLeads[i];
    ulEL.append(li);
}

8. JSON.parse()     :Turns a string into an array
let myLeads = `["abc"]`;
myLeads = JSON.parse(myLeads)

9. JSON.stringyfy()     :Turns an array into a string
myLeads = JSON.stringify(myLeads);

10. localStorage.setItem()      :To store a string against a key value
localStorage.setItem("myLeadsKey", JSON.stringify(myLeads));

11. localStorage.getItem()      :To get the string value store against a key
localStorage.getItem("myLeadsKey")
*/