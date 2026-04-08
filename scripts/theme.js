console.log("theme connected")

let theme_button = document.querySelector('#theme-toggle');

function clickTheme(){
    
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")){
        theme_button.textContent = "Switch to light mode"
    } else {
        theme_button.textContent = "Switch to dark mode"
    }  
}

theme_button.addEventListener("click", clickTheme);