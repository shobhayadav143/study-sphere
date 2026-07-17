// ==========================================
// StudySphere Dashboard JavaScript
// ==========================================

// ---------- Greeting ----------

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if(hour < 12){

    greeting.innerHTML="🌅 Good Morning, Student!";

}
else if(hour < 17){

    greeting.innerHTML="☀️ Good Afternoon, Student!";

}
else{

    greeting.innerHTML="🌙 Good Evening, Student!";

}

// ---------- Date ----------

const date = document.getElementById("date");

const today = new Date();

const options = {

weekday:"long",
year:"numeric",
month:"long",
day:"numeric"

};

date.innerHTML=today.toLocaleDateString("en-US",options);

// ---------- Motivational Quotes ----------

const quotes=[

"Success is the sum of small efforts repeated every day.",

"Push yourself because no one else is going to do it for you.",

"Study today for a better tomorrow.",

"Dream big. Work hard. Stay focused.",

"Consistency beats motivation.",

"Every expert was once a beginner.",

"Learning never exhausts the mind.",

"Stay positive and keep learning."

];

const quoteText=document.getElementById("quoteText");

const random=Math.floor(Math.random()*quotes.length);

quoteText.innerHTML=quotes[random];

// ---------- Progress Animation ----------

const progressFill=document.getElementById("progressFill");

const progressText=document.getElementById("progressText");

let progress=0;

const interval=setInterval(()=>{

progress++;

progressFill.style.width=progress+"%";

progressText.innerHTML=progress+"% Completed";

if(progress>=78){

clearInterval(interval);

}

},20);

// ---------- Local Storage Counts ----------

const notesCount=document.getElementById("notesCount");

const taskCount=document.getElementById("taskCount");

let notes=JSON.parse(localStorage.getItem("notes")) || [];

let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

notesCount.innerHTML=notes.length;

taskCount.innerHTML=tasks.length;

// ---------- Dark Mode ----------

const themeBtn=document.getElementById("themeBtn");

if(localStorage.getItem("dashboardTheme")=="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("dashboardTheme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}
else{

localStorage.setItem("dashboardTheme","light");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});

// ---------- Live Clock ----------

const clock=document.createElement("h3");

clock.style.marginTop="15px";

clock.style.color="#2563eb";

document.querySelector(".welcome").appendChild(clock);

function updateClock(){

const now=new Date();

clock.innerHTML=now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

// ---------- Card Hover ----------

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ---------- Footer Year ----------

document.querySelector("footer p").innerHTML=
`© ${new Date().getFullYear()} StudySphere | Student Productivity Hub`;