let removeNotesBtn = document.getElementsByClassName("nav-btn")[1];
removeNotesBtn.addEventListener("click", removeNotes)

function removeNotes() {
  let notes_body = document.getElementsByClassName("list-item");
  notes_body = [...notes_body];
  let selectedNotes = [];
  for(let i = 0; i < notes_body.length; i++) {
    let note = notes_body[i];
    if(note.children[0].children[1].children[0].checked) {
      selectedNotes.push([note, i]);
    }
  }
  selectedNotes.forEach(el => {
    el[0].remove();
    notes[el[1]] = null;
  });
  notes = notes.filter(n => n != null);
  for(let i = 0; i < notes.length; i++) {
    if(i == 0) notes[0].uid = 0;
    else {
      let el = notes[i];
      el.uid = notes[i-1].uid+1;
    }
  }
  if(notes.length == 0) reloadList();
}