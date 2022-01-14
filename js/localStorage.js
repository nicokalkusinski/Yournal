// Store an array in local storage
// Store after JSON stringifying (is this a verb?) it
function saveToLocal() {
  localStorage.setItem('notes', JSON.stringify(notes));
  console.log("Notes saved");
}

// Get an array from local storage
// Retrieve the array from local storage
let notesLS = loadFromLocal();
function loadFromLocal() {
  let notesloaded = localStorage.getItem('notes');
  if(notesloaded != null) {
    notesloaded = JSON.parse(notesloaded);
    console.log("Notes loaded", notesloaded);
    return notesloaded;
  } else {
    console.log("localStorage not found.");
    return [];
  }
}

notesLS.forEach(note => {
  new Note(note.title, note.category, note.ctx, note.date, false);
});