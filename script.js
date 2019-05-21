function openManageDatabaseWindow(){
    var x = document.getElementById("manage-databases-pop-up-box");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
}

function openAddWindow(){
    var x = document.getElementById("add-entry-pop-up-box");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
}
function openAlterWindow(){
  var x = document.getElementById("alter-entry-pop-up-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}
function openDeleteWindow(){
  var x = document.getElementById("delete-entry-pop-up-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}
function openSortWindow(){
  var x = document.getElementById("sort-entry-pop-up-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}
function openHideWindow(){
  var x = document.getElementById("hide-entry-pop-up-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

//CLOSE WINDOWS
function closeWindow(){
  var x = document.getElementById("manage-databases-pop-up-box");
  if (x.style.display === "block") {
    x.style.display = "none";
  } 
  var x = document.getElementById("add-entry-pop-up-box");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  var x = document.getElementById("alter-entry-pop-up-box");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  var x = document.getElementById("delete-entry-pop-up-box");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  var x = document.getElementById("sort-entry-pop-up-box");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  var x = document.getElementById("hide-entry-pop-up-box");
  if (x.style.display === "block") {
    x.style.display = "none";
  }

}