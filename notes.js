// ==========================================
// StudySphere Notes JavaScript
// ==========================================

// Elements
const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
const search = document.getElementById("search");
const themeBtn = document.getElementById("themeBtn");

// Load Notes
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// =======================
// Save Notes
// =======================

function saveNotes(){
    localStorage.setItem("notes", JSON.stringify(notes));
}

// =======================
// Display Notes
// =======================

function displayNotes(filteredNotes = notes){

    notesContainer.innerHTML = "";

    if(filteredNotes.length === 0){

        notesContainer.innerHTML =
        "<h3>No Notes Found.</h3>";

        return;
    }

    filteredNotes.forEach((note,index)=>{

        const card=document.createElement("div");
        card.className="note";

        card.innerHTML=`

        <p>${note.text}</p>

        <button class="pin" onclick="pinNote(${index})">

        📌

        </button>

        <button class="edit" onclick="editNote(${index})">

        ✏ Edit

        </button>

        <button class="delete" onclick="deleteNote(${index})">

        🗑 Delete

        </button>

        `;

        if(note.pinned){

            card.style.border="3px solid gold";
            card.style.background="#fff8dc";

        }

        notesContainer.appendChild(card);

    });

}

displayNotes();

// =======================
// Add Note
// =======================

addBtn.addEventListener("click",()=>{

    const text=noteInput.value.trim();

    if(text===""){

        alert("Please enter a note.");

        return;

    }

    notes.unshift({

        text:text,
        pinned:false

    });

    saveNotes();

    displayNotes();

    noteInput.value="";

});

// =======================
// Delete
// =======================

function deleteNote(index){

    if(confirm("Delete this note?")){

        notes.splice(index,1);

        saveNotes();

        displayNotes();

    }

}

// =======================
// Edit
// =======================

function editNote(index){

    const updated=prompt("Edit Note",notes[index].text);

    if(updated!==null && updated.trim()!==""){

        notes[index].text=updated;

        saveNotes();

        displayNotes();

    }

}

// =======================
// Pin
// =======================

function pinNote(index){

    notes[index].pinned=!notes[index].pinned;

    notes.sort((a,b)=>b.pinned-a.pinned);

    saveNotes();

    displayNotes();

}

// =======================
// Search
// =======================

search.addEventListener("keyup",()=>{

    const keyword=search.value.toLowerCase();

    const filtered=notes.filter(note=>

        note.text.toLowerCase().includes(keyword)

    );

    displayNotes(filtered);

});

// =======================
// Dark Mode
// =======================

if(localStorage.getItem("notesTheme")=="dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("notesTheme","dark");

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("notesTheme","light");

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

// =======================
// Footer Year
// =======================

document.querySelector("footer p").innerHTML =
`© ${new Date().getFullYear()} StudySphere | Student Productivity Hub`;