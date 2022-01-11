let exportBtn = document.getElementsByClassName("nav-btn")[2];
exportBtn.addEventListener("click", () => {
  exportNotes(notes);
})

function exportNotes(notes) {
  let json = JSON.stringify(notes, null, 2);
  let file = new Blob([json], {type:JSON});
  let a = document.createElement("a");
  url = URL.createObjectURL(file);
  a.href = url;
  a.download = "notes.json";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url); 
  }, 1)
}