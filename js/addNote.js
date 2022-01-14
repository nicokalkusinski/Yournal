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
  setNoteAction("add");
})

addNewNoteBtn.addEventListener("click", () => {
  let inputs = document.getElementsByClassName("inputed-value")
  let values = []
  // for(let i = 0; i < inputs.length; i++) {
  //   if(inputs[i].innerHTML == "") values.push("Untitled")
  // }
  // condition ? exprIfTrue : exprIfFalse
  values.push(inputs[0].innerHTML != "" ? inputs[0].innerHTML : "Note " + (notes.length+1))
  values.push(inputs[1].innerHTML != "" ? inputs[1].innerHTML : "No category")
  values.push(inputs[2].innerHTML)

  // if(inputs[0].innerHTML == "") values.push("Note " + (notes.length + 1))
  // else values.push(inputs[0].innerHTML)
  
  if(inputs[1].innerHTML == "") values.push("No category")
  else values.push(inputs[1].innerHTML)

  if(inputs[2].innerHTML == "") values.push("")
  else values.push(inputs[2].innerHTML)

  new Note(values[0], values[1], values[2]);
  closeNoteBtn.click()
  saveToLocal()
})

closeNoteBtn.addEventListener("click", () => {
  let toReset = document.getElementsByClassName("inputed-value");
  for(let i = 0; i < toReset.length; i++) toReset[i].innerHTML = "";
  modal.forEach(el => el.style.display = "none");
  document.body.style.overflow = "auto";
})