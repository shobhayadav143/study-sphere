// ==========================================
// StudySphere Documentation JavaScript
// ==========================================

// Theme Button
const themeBtn = document.getElementById("themeBtn");

// ------------------------
// Load Saved Theme
// ------------------------

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}

// ------------------------
// Theme Toggle
// ------------------------

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// ------------------------
// Current Year
// ------------------------

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} StudySphere | Student Productivity Hub`;

// ------------------------
// Smooth Scrolling
// ------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ------------------------
// Card Animation on Scroll
// ------------------------

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .6s ease";

    observer.observe(card);

});