const menu__nav = document.getElementById("menu__nav");
const menu__black = document.getElementById("menu__black")
const menu__btn = document.getElementById("menu__btn");

menu__btn.addEventListener("click", mostrar_menu);
menu__black.addEventListener("click", desaperarecer_menu);

function mostrar_menu() {
    menu__nav.style.right = "0px";
    menu__black.style.display = "block";
}


function desaperarecer_menu() {
    menu__nav.style.right = "-250px";
    menu__black.style.display = "none";
}




