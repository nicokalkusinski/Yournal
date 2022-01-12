function createModal(btnID) {
  let modal = document.getElementById("searchModal");
  let searchBtn = null;
  switch(btnID) {
    case "title": searchBtn = document.getElementsByClassName("nav-btn")[4]; break;
    case "category": searchBtn = document.getElementsByClassName("nav-btn")[5]; break;
    case "date": searchBtn = document.getElementsByClassName("nav-btn")[6]; break;
  }
  searchBtn = searchBtn.getBoundingClientRect();

  modal.style.top = searchBtn.top + 16+"px";
  modal.style.left = searchBtn.left - (modal.offsetWidth/2) +30 + searchBtn.width/2 + "px";
}
// createModal("title");