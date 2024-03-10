let person = document.getElementById("person");
let windowimg = document.getElementById("window");
let desk = document.getElementById("desk");
window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    person.style.marginTop = value * 1 + "px";
    person.style.opacity = 100 - value / 4 + "%";
    windowimg.style.opacity = 100 - value / 2 + "%";
    desk.style.marginTop = value * .5 + "px";
    desk.style.opacity = 100 - value / 8 + "%";
});
window.onload = function() {
    if (window.location.hash) window.location.hash = "";
};

//# sourceMappingURL=index.a750324f.js.map
