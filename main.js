
// variable declaration 

const notesContainer = document.querySelector(".notes-container");
const CreateBtn = document.querySelector(".btn");
const Notes = document.querySelectorAll(".input-box");

// function for showing notes 

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("Notes");
}

showNotes();

// for saving notes which we will create 

function updateStorage(){
    localStorage.setItem("Notes", notesContainer.innerHTML);
}

// addEventListener on button to create notes 

CreateBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// addEventListener on button dele img to del notes 

notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === "P"){
        Notes = document.querySelectorAll(".input-box");
        Notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

// for pressing the shift to change the line 

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})