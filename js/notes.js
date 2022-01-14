let notes = []
let openNoteUID = null;
class Note {
  constructor(title, category, ctx, date = null, shift = true) {
    this.uid = notes.length;
    this.title = title;
    this.category = category;
    this.ctx = ctx;
    if(date == null) {
      let date = new Date();
      this.date = date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear();
    } else this.date = date

    this.addNote(shift);
  }

  addNote(shift) {
    if(shift) notes.unshift(this)
    else notes.push(this)
    sortNotes()
    reloadList()
  }

  drawNote() {
    let list = document.getElementById("items-container")
  
      let list_item = document.createElement("div")
      list_item.className = "list-item";
      list.appendChild(list_item);

      let item_icons = document.createElement("div")
      item_icons.className = "item-icons";
      list_item.appendChild(item_icons);

        let icon_select = document.createElement("div")
        icon_select.className = "icon-select";
        icon_select.innerHTML = '<input type="checkbox">';
        item_icons.appendChild(icon_select);

        let icon_drag = document.createElement("div")
        icon_drag.className = "icon-drag";
        icon_drag.innerHTML = "<i class='bx bx-grid-vertical'></i>";
        item_icons.appendChild(icon_drag);

        let icon_edit = document.createElement("div")
        icon_edit.className = "icon-edit";
        icon_edit.innerHTML = "<i class='bx bx-edit'></i>";
        item_icons.appendChild(icon_edit);

      let item_title = document.createElement("div");
      item_title.className = "item-title";
      item_title.innerHTML = this.title + "<i class='bx bx-show'></i>";
      list_item.appendChild(item_title);

      let item_cat = document.createElement("div");
      item_cat.className = "item-category";
      item_cat.innerHTML = this.category;
      list_item.appendChild(item_cat);

      let item_date = document.createElement("div");
      item_date.className = "item-date";
      item_date.innerHTML = this.date;
      list_item.appendChild(item_date);
  }
}

function sortNotes() {
  notes[0].uid = 0
  for(let i = 1; i < notes.length; i++) {
    notes[i].uid = i;
  }
}

function reloadList() {
  // let items = document.getElementsByClassName("list-item");
  let emptyListText = document.getElementById("list-empty");
  let listLegend = document.getElementById("list-legend");
  let contentLegend = document.getElementById("content-legend");
  if(notes.length == 0) {
    emptyListText.style.display = "block";
    listLegend.style.display = "none";
    contentLegend.style.display = "none";
  } else {
    emptyListText.style.display = "none";
    listLegend.style.display = "grid";
    contentLegend.style.display = "grid";

    // console.log(notes)
    redrawNotes(notes)
  }

  function redrawNotes(notes) {
    let list = document.getElementById("items-container")
    list.innerHTML = '';
    for(let i = 0; i < notes.length; i++) {
      notes[i].drawNote()
      setEventListeners(i)
    }
  }

  function setEventListeners(id) {
    let items = document.getElementsByClassName("list-item");
    let item = items[items.length-1];
    let title = item.children[1];
    let editBtn = item.children[0].children[2];
    item.addEventListener("mouseenter", () => displayPreview(id))
    item.addEventListener("mouseleave", () => noPreview())
    editBtn.addEventListener("click", () => openNote(id))
    title.addEventListener("mouseenter", () => title.children[0].style.opacity = 0.3);
    title.addEventListener("mouseleave", () => title.children[0].style.opacity = 0);
    title.addEventListener("click", () => displayNote(id))
  }
}
reloadList();