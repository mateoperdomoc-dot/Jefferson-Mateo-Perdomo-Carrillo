/*==============================
        LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});


/*==============================
        TEXTO ESCRIBIENDO
==============================*/

const typing = document.querySelector(".typing");

const words = [

    "Desarrollador Web",
    "Diseñador Multimedia",
    "Frontend Developer",
    "UI / UX Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/*==============================
        MENU RESPONSIVE
==============================*/

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/*==============================
        SCROLL HEADER
==============================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "0 0 25px cyan";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});


/*==============================
    ANIMACIÓN AL HACER SCROLL
==============================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hidden").forEach(el => {

    observer.observe(el);

});


/*==============================
        BOTÓN SUBIR
==============================*/

const topButton = document.createElement("div");

topButton.innerHTML = "▲";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.opacity = "1";
        topButton.style.pointerEvents = "all";

    } else {

        topButton.style.opacity = "0";
        topButton.style.pointerEvents = "none";

    }

});


/*==============================
        CURSOR BRILLO
==============================*/

const cursor = document.createElement("div");

cursor.id = "cursor";

document.body.appendChild(cursor);

window.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


/*==============================
        EFECTO GLITCH
==============================*/

setInterval(() => {

    document.querySelector(".logo").classList.add("glitch");

    setTimeout(() => {

        document.querySelector(".logo").classList.remove("glitch");

    }, 200);

}, 4000);