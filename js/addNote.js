let modal = []
modal.push(document.getElementById("addNoteModal"))
modal.push(document.getElementById("darkener"))

modal.forEach(el => el.style.display = "none")

let newNoteBtn = document.getElementsByClassName("nav-btn")[0]
let closeNoteBtn = document.getElementById("closeBtn");
let addNewNoteBtn = document.getElementById("addBtn")

newNoteBtn.addEventListener("click", () => {
  modal.forEach(el => {
    el.style.display = "flex";
    el.style.zIndex = "2";
  });
  document.body.style.overflow = "hidden";
})

addNewNoteBtn.addEventListener("click", () => {
  let inputs = document.getElementsByClassName("inputed-value")
  let values = []
  for(let i = 0; i < inputs.length; i++) {
    values.push(inputs[i].textContent)
  }
  new Note(values[0], values[1], values[2]);
  closeNoteBtn.click()
})

closeNoteBtn.addEventListener("click", () => {
  document.getElementById("newNoteForm").reset();
  modal.forEach(el => el.style.display = "none");
  document.body.style.overflow = "auto";
})