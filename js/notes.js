let notes = []
let openNoteUID = null;
class Note {
  constructor(title, category, ctx, date = null) {
    this.uid = notes.length;
    this.title = title;
    this.category = category;
    this.ctx = ctx;
    if(date == null) {
      let date = new Date();
      this.date = date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear();
    } else this.date = date

    this.addNote();
    this.setEventListeners();
  }

  getNote() {
    return this;
  }

  addNote() {
    notes.push(this.getNote())
    this.drawNote()
    if(typeof(reloadList) == "function") reloadList()
  }

  setEventListeners() {
    let items = document.getElementsByClassName("list-item");
    let item = items[items.length-1];
    item.addEventListener("mouseenter", () => displayPreview(this.uid))
    item.addEventListener("mouseleave", () => noPreview())
    item.children[1].addEventListener("click", () => openNote(this.uid))
  }

  drawNote() {
    let list = document.getElementById("list")
  
      let list_item = document.createElement("div")
      list_item.className = "list-item";
      list.appendChild(list_item);

      let item_icons = document.createElement("div")
      item_icons.className = "item-icons";
      list_item.appendChild(item_icons);

        let icon_drag = document.createElement("div")
        icon_drag.className = "icon-drag";
        icon_drag.innerHTML = "<i class='bx bx-grid-vertical'></i>";
        item_icons.appendChild(icon_drag);

        let icon_select = document.createElement("div")
        icon_select.className = "icon-select";
        icon_select.innerHTML = '<input type="checkbox">';
        item_icons.appendChild(icon_select);

        // let icon_edit = document.createElement("div")
        // icon_edit.className = "icon-edit";
        // icon_edit.innerHTML = "<i class='bx bx-edit'></i>";
        // item_icons.appendChild(icon_edit);

      let item_title = document.createElement("div");
      item_title.className = "item-title";
      item_title.innerHTML = this.title;
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

new Note("Hover over me!", "Guide", "This is the guide how should you use the Yournal app!")
new Note("Long text test", "Guide", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dicta, recusandae laborum unde maiores, quos et impedit nemo neque enim perspiciatis consequuntur facere rem sit explicabo dolorem illum mollitia saepe dignissimos fugit vero quidem? Reiciendis ducimus architecto quaerat illo nam praesentium explicabo animi ad beatae, nihil, corporis sit quasi aspernatur cupiditate rerum asperiores at. Eveniet nihil itaque totam sint aspernatur laborum ut mollitia. Labore reiciendis consequuntur beatae nesciunt, fugiat dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dicta, recusandae laborum unde maiores, quos et impedit nemo neque enim perspiciatis consequuntur facere rem sit explicabo dolorem illum mollitia saepe dignissimos fugit vero quidem? Reiciendis ducimus architecto quaerat illo nam praesentium explicabo animi ad beatae, nihil, corporis sit quasi aspernatur cupiditate rerum asperiores at. Eveniet nihil itaque totam sint aspernatur laborum ut mollitia. Labore reiciendis consequuntur beatae nesciunt, fugiat dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dicta, recusandae laborum unde maiores, quos et impedit nemo neque enim perspiciatis consequuntur facere rem sit explicabo dolorem illum mollitia saepe dignissimos fugit vero quidem? Reiciendis ducimus architecto quaerat illo nam praesentium explicabo animi ad beatae, nihil, corporis sit quasi aspernatur cupiditate rerum asperiores at. Eveniet nihil itaque totam sint aspernatur laborum ut mollitia. Labore reiciendis consequuntur beatae nesciunt, fugiat dicta. ")
// for(let i = 0; i < 30; i++) {
//   new Note(`title ${i+1}`, "cat", "sample text")
// }