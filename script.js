function openManageDatabaseWindow(){
    var x = document.getElementById("manage-databases-pop-up-box");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
}

function closeManageDatabaseWindow(){
    var x = document.getElementById("manage-databases-pop-up-box");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
}