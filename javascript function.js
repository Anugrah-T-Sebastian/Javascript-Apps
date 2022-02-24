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

22. reduce()    //:Used to get unique items from an array. It takes 2 arguments (values, item) where (values) is a pre-existing array and (item) are items of the array being traversed. It always returns (values)
const categories = menuItemArray.reduce(function(values, item) {
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
}, ['all'])

23. map()   //:It is used to traverse over the elements of an array. It takes 1 argument (item) which are the elements is the array
let categoryBtns = categories.map(function(category) {
    const btnItems = `
                      <button class="filter-btn" type="button" data-id="${category}">${category}</button>
                      `
    return btnItems;
})

24. join()  //:It is used to join the strings present in a array of strings into a single string. It takes in the delimited required as its argument. If no argument is passed, then (,) is used as default delimiter
categoryBtns = categoryBtns.join("");

25. Date()  //:It is used to get Date-Time values
date.textContent = new Date().getFullYear()

26. getBoundingClientRect() //:Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport. It returns an object with many attribute
const linksHeight = links.getBoundingClientRect().height;

27. pageYOffset     //:pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
const scrollHeight = this.window.pageYOffset;

28. getAttribute()      //:Get the value inside an attribute of an element
const id = e.currentTarget.getAttribute("href")

29. slice()     //:slice extracts a section of a string without modifying original string
const id = e.currentTarget.getAttribute("href").slice(1);

30. offsetTop   //:A Number, representing the top position of the element, in pixels
let position = element.offsetTop