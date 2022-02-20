let count = 0;  //Set inital value

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");     //Select all the buttons

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')) {
            console.log("Decrease clicked");
            count--;
        }
        else if(styles.contains("reset")) {
            console.log("Reset clicked");
            count = 0;
        }
        else if(styles.contains("increase")){
            console.log("Increase cliced");
            count++;
        }

        if(count > 0) {
            value.style.color = "green";
        }
        else if(count < 0) {
            value.style.color = "red";
        }
        else if(count === 0) {
            value.style.color = "#222";
        }

        value.textContent = count;
    })
})