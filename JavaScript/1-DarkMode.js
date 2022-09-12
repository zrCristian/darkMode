const baseColor = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const btnSwitch = document.getElementById("switch");

const seleccionColor = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    // if("theme" === "light") {
    //     btnSwitch.classList.add("active");
    // } else if ("theme" === "dark") {
    //     btnSwitch.classList.add("active");
    // }
    
}

btnSwitch.addEventListener("click", () => {
    let switchTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
    seleccionColor(switchTheme);

    btnSwitch.classList.toggle("active");
});


seleccionColor(localStorage.getItem("theme") || baseColor)








