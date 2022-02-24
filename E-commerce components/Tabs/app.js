const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if(id) {                                    //check if the clicked element is a btn, because only btn has data- attribute
        btns.forEach(btn => {      
            btn.classList.remove("active");     //remove active class from all the buttons
            e.target.classList.add("active");   //add active class to clicked btn only
        });

        articles.forEach(article => {
            article.classList.remove("active");                     //remove active class from all the articles
            document.getElementById(id).classList.add("active");    //add active class to clicked article only
        });
    }

})