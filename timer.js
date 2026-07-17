// ==========================================
// StudySphere Pomodoro Timer
// ==========================================

// Timer Settings
let totalTime = 25 * 60; // 25 minutes
let timeLeft = totalTime;
let timer = null;

// Elements
const time = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const sessionCount = document.getElementById("sessionCount");
const themeBtn = document.getElementById("themeBtn");

// Load Completed Sessions
let sessions = Number(localStorage.getItem("sessions")) || 0;
sessionCount.textContent = sessions;

// ------------------------
// Update Timer Display
// ------------------------

function updateDisplay() {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    time.textContent = `${minutes}:${seconds}`;
}

updateDisplay();

// ------------------------
// Start Timer
// ------------------------

startBtn.addEventListener("click", () => {

    if (timer !== null) return;

    timer = setInterval(() => {

        timeLeft--;

        updateDisplay();

        if (timeLeft <= 0) {

            clearInterval(timer);
            timer = null;

            sessions++;
            localStorage.setItem("sessions", sessions);

            sessionCount.textContent = sessions;

            alert("🎉 Congratulations! Pomodoro Session Completed!");

            timeLeft = totalTime;
            updateDisplay();

        }

    }, 1000);

});

// ------------------------
// Pause Timer
// ------------------------

pauseBtn.addEventListener("click", () => {

    clearInterval(timer);

    timer = null;

});

// ------------------------
// Reset Timer
// ------------------------

resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    timer = null;

    timeLeft = totalTime;

    updateDisplay();

});

// ------------------------
// Dark Mode
// ------------------------

if(localStorage.getItem("timerTheme") === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("timerTheme","dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("timerTheme","light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// ------------------------
// Footer Year
// ------------------------

document.querySelector("footer p").innerHTML =
`© ${new Date().getFullYear()} StudySphere | Student Productivity Hub`;