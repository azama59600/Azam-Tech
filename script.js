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

//HIDE GRAPHIC NOVELS
function hideAddGraphicNovel(){
  var x = document.getElementById("addGraphicNovelSect");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  }
  var x = document.getElementById("addComicIssueSect");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  }
  document.getElementById("add-entry-pop-up-box").style.height = "26.6em";
}
function hideAlterGraphicNovel(){
  var x = document.getElementById("alterGraphicNovelSect");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  }
  var x = document.getElementById("alterComicIssueSect");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  }
}
function hideDeleteGraphicNovel(){
  var x = document.getElementById("deleteGraphicNovelSect");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  }
  var x = document.getElementById("deleteComicIssueSect");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  }
}
function hideSortGraphicNovel(){
  var x = document.getElementById("sortGraphicNovelSect");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  }
  var x = document.getElementById("sortComicIssueSect");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  }
}
function hideHideGraphicNovel(){
  var x = document.getElementById("hideGraphicNovelSect");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  }
  var x = document.getElementById("hideComicIssueSect");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  }
}
//HIDE COMIC SERIES
function showAddGraphicNovel(){
  var x = document.getElementById("addComicIssueSect");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  }
  var x = document.getElementById("addGraphicNovelSect");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  }
  document.getElementById("add-entry-pop-up-box").style.height = "30em";
}
function showAlterGraphicNovel(){
  var x = document.getElementById("alterComicIssueSect");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  }
  var x = document.getElementById("alterGraphicNovelSect");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  }
}
function showDeleteGraphicNovel(){
  var x = document.getElementById("deleteComicIssueSect");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  }
  var x = document.getElementById("deleteGraphicNovelSect");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  }
}
function showSortGraphicNovel(){
  var x = document.getElementById("sortComicIssueSect");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  }
  var x = document.getElementById("sortGraphicNovelSect");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  }
}
function showHideGraphicNovel(){
  var x = document.getElementById("hideComicIssueSect");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  }
  var x = document.getElementById("hideGraphicNovelSect");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
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