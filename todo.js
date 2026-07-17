// ==========================================
// StudySphere Todo JavaScript
// ==========================================

// Elements
const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const addTask = document.getElementById("addTask");
const taskContainer = document.getElementById("taskContainer");
const progressText = document.getElementById("progressText");
const themeBtn = document.getElementById("themeBtn");

// Load Tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ----------------------
// Save Tasks
// ----------------------

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ----------------------
// Display Tasks
// ----------------------

function displayTasks(){

    taskContainer.innerHTML = "";

    let completed = 0;

    tasks.forEach((task,index)=>{

        if(task.completed) completed++;

        const card = document.createElement("div");

        card.className = `task ${task.priority.toLowerCase()}`;

        if(task.completed){
            card.classList.add("completed");
        }

        card.innerHTML = `

            <h3>${task.title}</h3>

            <p><strong>Priority:</strong> ${task.priority}</p>

            <p><strong>Due:</strong> ${task.date || "No Date"}</p>

            <div class="actions">

                <button class="complete"
                onclick="toggleComplete(${index})">

                ${task.completed ? "Undo" : "Complete"}

                </button>

                <button class="delete"
                onclick="deleteTask(${index})">

                Delete

                </button>

            </div>

        `;

        taskContainer.appendChild(card);

    });

    progressText.innerHTML =
    `Completed : ${completed} / ${tasks.length}`;

}

displayTasks();

// ----------------------
// Add Task
// ----------------------

addTask.addEventListener("click",()=>{

    const title = taskInput.value.trim();

    if(title===""){

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        title:title,

        priority:priority.value,

        date:dueDate.value,

        completed:false

    });

    saveTasks();

    displayTasks();

    taskInput.value="";
    dueDate.value="";

});

// ----------------------
// Delete Task
// ----------------------

function deleteTask(index){

    if(confirm("Delete this task?")){

        tasks.splice(index,1);

        saveTasks();

        displayTasks();

    }

}

// ----------------------
// Complete Task
// ----------------------

function toggleComplete(index){

    tasks[index].completed =
    !tasks[index].completed;

    saveTasks();

    displayTasks();

}

// ----------------------
// Dark Mode
// ----------------------

if(localStorage.getItem("todoTheme")=="dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("todoTheme","dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }
    else{

        localStorage.setItem("todoTheme","light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// ----------------------
// Footer Year
// ----------------------

document.querySelector("footer p").innerHTML =
`© ${new Date().getFullYear()} StudySphere | Student Productivity Hub`;