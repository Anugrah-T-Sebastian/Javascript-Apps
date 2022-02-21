//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){       //Select each article
    // console.log(question);
    const btn = question.querySelector(".question-btn");    //Select button inside the article
    // console.log(btn);
    btn.addEventListener("click", function() {
        questions.forEach(function (item) {     //To this only if you want one FAQ open at a time. Logic:= If the article opened is not same as the above selected article, then close that article
            if(item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})








// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn) {     //Select each button
//     btn.addEventListener("click", function(e) {
//         const question = e.currentTarget.parentElement.parentElement;        //Go to parent of parent of the button i.e. article section
//         question.classList.toggle("show-text");      //Show article
//     })
// })