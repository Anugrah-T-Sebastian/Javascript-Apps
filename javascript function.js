//CSS:
//# -> identifies element's by it's ID
//. -> identifies element by it's CLASS

1. document.getElementById("count-el").innerText;

2. document.getElementById("count-el").textContent;  //:Using .textContent because .innerText can skip human unreadable elements e.g. <space>

3. document.querySelector("#sum-el") OR document.querySelector(".sum-el"); //:Pass in the CSS selector

4. 
inputBtn.addEventListener("click", function(e) {
    console.log("Button cliked from addEventListener on DOM element", e);
})

5. inputEl.value //:To get value from an input field. The inputEl contains the input HTML object {const inputEl = document.getElementById("input-el");}

6. ulEL.innerHTML   //:All the string in the .innerHTML is treated as HTML
for(let i = 0; i < myLeads.length; i++) {           //Code 1.1
    ulEL.innerHTML += "<li>" + myLeads[i] + "</li>";
}

7. document.createElement() //:Used to create DOM elements
for(let i = 0; i < myLeads.length; i++) {           //Code 1.2: Same as 1.1 with different method
    //Above code can be broken down into 1)Create element 2)set text content 3)append to ul
    const li = document.createElement("li");
    li.textContent = myLeads[i];
    ulEL.append(li);
}

8. JSON.parse()     //:Turns a string into an array
let myLeads = `["abc"]`;
myLeads = JSON.parse(myLeads)

9. JSON.stringyfy()     //:Turns an array into a string
myLeads = JSON.stringify(myLeads);

10. localStorage.setItem()      //:To store a string against a key value
localStorage.setItem("myLeadsKey", JSON.stringify(myLeads));

11. localStorage.getItem()      //:To get the string value store against a key
localStorage.getItem("myLeadsKey")

12. .style //:Used to style the DOM elements
document.body.style.backgroundColor = "red";

13. .querySelectorAll()     //:Used to select all elements for the CSS selector. It returns a NodeList which contains all the DOM elements for CSS selector
const btns = document.querySelectorAll(".btn");

14. .forEach()      //:Used to iterate access all the DOM elements in the NodeList individually
btns.forEach(function(btn) {
    console.log(btn);
})

15. .currentTarget //:Used to refer to the currently select DOM element
btn.addEventListener("click", function(e) {
    const element = e.currentTarget;
})

16. .classList //:Return the a list containing all the words present in the class of the DOM element
const styles = e.currentTarget.classList;

17. contains()  //:Checks if a string is present in the given list
styles.contains('decrease');

18. add()   //:Used to add an item to a list. Pass in the item that you want to add
links.classList.add("show-links");

19. remove()    //:Used to remove an item from a list. Pass in the item that you want to remove
links.classList.remove("show-links");

20. toggle()    //:Used to add toggle functionality
links.classList.toggle("show-links");

21. parentElement       //:Used to access the parent element of a DOM element
btn.addEventListener("click", function(e) {
            const item = e.currentTarget.parentElement;        //Go to parent of the button i.e. article section
            console.log(item);
        })