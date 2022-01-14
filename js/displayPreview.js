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
  // preview.children[2].innerHTML = notes[id].ctx.replaceAll("\n", "\<br\>");
  tempCtx = notes[id].ctx;
  tempCtx = tempCtx.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  preview.children[2].innerHTML = tempCtx;

  //calculate sight area
  let sightArea = window.screen.height - nav_bar.offsetHeight;
  let gradient = document.getElementById("preview-more-gradient");
  // console.log(preview.offsetHeight, sightArea*0.9)
  if(preview.offsetHeight > sightArea * 0.6) {
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