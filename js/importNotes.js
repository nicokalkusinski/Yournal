let importInput = document.getElementById("importInput");
importInput.addEventListener("change", () => {
  importNotes(importInput.files[0])
})

function importNotes(json) {
  let arr = [];
  let fr = new FileReader();
  fr.onload = function(e) {
    let json_data = JSON.parse(e.target.result)
    for(let i in json_data) {
      arr.push(json_data[i]);
    }
  }
  fr.readAsText(json);
  setTimeout(() => loadNotes(arr), 1)
}

function loadNotes(notes) {
  notes.forEach(note => new Note(note.title, note.category, note.ctx, note.date));
  reloadList();
}

