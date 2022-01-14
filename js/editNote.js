function openNote(id) {
  openNoteUID = id;
  note = notes[id];

  modal.forEach(el => {
    el.style.display = "flex";
    el.style.zIndex = "2";
  });
  document.body.style.overflow = "hidden";

  setNoteAction("edit");
}

document.getElementById("saveBtn").addEventListener("click", () => {
  let values = document.getElementsByClassName("inputed-value");
  updateNote(openNoteUID, values[0].textContent, values[1].textContent, values[2].textContent);
})

function updateNote(uid, title, category, ctx) {
  let note = notes[uid];
  note.title = title;
  note.category = category;
  note.ctx = ctx.replaceAll("\<br\>", "\<br\>\n");
  let date = new Date();
  note.date = date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear();

  let items = document.getElementsByClassName("list-item");
  items[uid].children[1].innerHTML = note.title + "<i class='bx bx-show'></i>";
  items[uid].children[2].innerHTML = note.category;
  items[uid].children[3].innerHTML = note.date;
  closeNoteBtn.click();
  saveToLocal();
}

function setNoteAction(action) {
  let header = document.getElementById("modalHeader");
  let values = document.getElementsByClassName("inputed-value");
  let btns = [
    document.getElementById("addBtn"),
    document.getElementById("saveBtn")
  ]
  switch(action){
    case "add":
      // console.log("add")
      header.innerHTML = "Create a new note";
    
      values[0].textContent = "";
      values[1].textContent = "";
      values[2].textContent = "";
    
      btns[0].style.display = "block";
      btns[1].style.display = "none";
      break;
    case "edit":
      // console.log("edit")
      header.innerHTML = "Edit the note";
    
      values[0].textContent = note.title;
      values[1].textContent = note.category;
      note.ctx = note.ctx.replaceAll("\<br\>", "\<br\>\n")
      note.ctx = note.ctx.replaceAll("\<br\>\n\n", "\<br\>\n")
      values[2].innerText = note.ctx;
    
      btns[0].style.display = "none";
      btns[1].style.display = "block";
  }
}