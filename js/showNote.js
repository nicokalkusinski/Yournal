let showNote = document.getElementById("showNoteModal");
showNote.style.display = "none";

function displayNote(id) {
  note = notes[id];

  modal[1].style.display = "flex";
  modal[1].style.zIndex = "2";
  showNote.style.display = "flex";

  document.body.style.overflow = "hidden";

  let noteInfo = document.getElementById("noteInfo");
  let noteContent = document.getElementById("noteContent");

  noteInfo.children[0].innerHTML = note.title;
  noteInfo.children[1].innerHTML = `On <span class="bolded">${note.date}</span> as <span class="bolded">${note.category}</span>`;

  tempCtx = note.ctx;
  tempCtx = tempCtx.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  noteContent.innerHTML = tempCtx;
}

let closeDisplayBtn = document.getElementById("closeNoteBtn");
closeDisplayBtn.addEventListener("click", stopDisplayingNote)

function stopDisplayingNote() {
  modal[1].style.display = "none";
  showNote.style.display = "none";
}