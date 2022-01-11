function reloadList() {
  let items = document.getElementsByClassName("list-item");
  let emptyListText = document.getElementById("list-empty");
  let listLegend = document.getElementById("list-legend");
  let contentLegend = document.getElementById("content-legend");
  if(items.length == 0) {
    emptyListText.style.display = "block";
    listLegend.style.display = "none";
    contentLegend.style.display = "none";
  } else {
    emptyListText.style.display = "none";
    listLegend.style.display = "grid";
    contentLegend.style.display = "grid";
  }
}
reloadList();

function displayPreview(id) {
  //preview appearance
  let preview = document.getElementById("note-preview");
  let nav_bar = document.getElementsByTagName("nav")[0];
  preview.style.opacity = 1;
  preview.style.transform = "TranslateY(0rem)";
  preview.style.height = "fit-content";

  //content of the preview
  preview.children[0].innerHTML = notes[id].title;
  preview.children[1].children[1].innerHTML = notes[id].category;
  preview.children[1].children[3].innerHTML = notes[id].date;
  preview.children[2].innerHTML = notes[id].ctx;

  //calculate sight area
  let sightArea = window.screen.height - nav_bar.offsetHeight;
  let gradient = document.getElementById("preview-more-gradient");
  // console.log(preview.offsetHeight, sightArea)
  if(preview.offsetHeight > sightArea) {
    // console.log("this")
    // console.log("sight area:", sightArea, "modal offsetHeight:", preview.offsetHeight)
    gradient.style.opacity = 1;
    preview.style.height = "50%";
  } else {
    // console.log("sight area:", sightArea, "modal offsetHeight:", preview.offsetHeight)
    gradient.style.opacity = 0;
  }
}

function noPreview() {
  let preview = document.getElementById("note-preview");
  preview.style.opacity = 0;
  preview.style.transform = "TranslateY(1rem)";
}