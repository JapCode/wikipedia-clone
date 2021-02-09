const menu = document.querySelector(".language-list-containers")
const burguerButton = document.querySelector("#button-change")

function hideShow () {
    
    if (menu.classList.contains("is-active")) {
        
        menu.classList.remove("is-active")
    }
    else {
        menu.classList.add("is-active")
    }
}
burguerButton.addEventListener("click", hideShow)