$(document).ready(function(){
  $('#load-add-table').on('change', function() {
    if ( this.value == '1')
    //.....................^.......
    {
      $("#add-graphic-novel").show();
    }
    else
    {
      $("#add-graphic-novel").hide();
    }
    if ( this.value == '2')
    //.....................^.......
    {
      $("#add-comic-issue").show();
    }
    else
    {
      $("#add-comic-issue").hide();
    }    
  });
  $('#load-alter-table').on('change', function() {
    if ( this.value == '1')
    //.....................^.......
    {
      $("#alter-graphic-novel").show();
    }
    else
    {
      $("#alter-graphic-novel").hide();
    }
    if ( this.value == '2')
    //.....................^.......
    {
      $("#alter-comic-issue").show();
    }
    else
    {
      $("#alter-comic-issue").hide();
    }
  });
  $('#load-delete-table').on('change', function() {
    if ( this.value == '1')
    //.....................^.......
    {
      $("#delete-graphic-novel").show();
    }
    else
    {
      $("#delete-graphic-novel").hide();
    }
    if ( this.value == '2')
    //.....................^.......
    {
      $("#delete-comic-issue").show();
    }
    else
    {
      $("#delete-comic-issue").hide();
    }
  });
});

function showApplication() {
  var welcome = document.getElementById("comic-tracker-start-section");
  var application = document.getElementById("comic-tracking-application");
  if (application.style.display === "none") {
      console.log("SHOW APPLICATIONS")
      welcome.style.display = "none";
      application.style.display = "block";
  }
}

//SHOW AND HIDE MAIN SECTIONS
function showManageDatabases() {
  resetAlterSubSections();
  resetManageSubSections();
  resetViewOptionsSubSections();
  var alter = document.getElementById("comic-tracker-alter-section");
  var manage = document.getElementById("comic-tracker-manage-section");
  var view = document.getElementById("comic-tracker-view-options-section");
  if (manage.style.display === "none") {
      console.log("SHOW MANAGE OPTION")
      alter.style.display = "none";
      view.style.display = "none";
      manage.style.display = "block";
  }
}
function showAlterTables() {
  resetAlterSubSections();
  resetManageSubSections();
  resetViewOptionsSubSections();
  hideTableDropdown();
  var alter = document.getElementById("comic-tracker-alter-section");
  var manage = document.getElementById("comic-tracker-manage-section");
  var view = document.getElementById("comic-tracker-view-options-section");
  if (alter.style.display === "none") {
      console.log("SHOW ALTER OPTIONS")
      manage.style.display = "none";
      view.style.display = "none";
      alter.style.display = "block";
  }
}
function showViewOptionsSection() {
  resetAlterSubSections();
  resetManageSubSections();
  resetViewOptionsSubSections();
  var alter = document.getElementById("comic-tracker-alter-section");
  var manage = document.getElementById("comic-tracker-manage-section");
  var view = document.getElementById("comic-tracker-view-options-section");
  if (view.style.display === "none") {
      console.log("SHOW ALTER OPTIONS")
      alter.style.display = "none";
      manage.style.display = "none";
      view.style.display = "block";
  }
}

function showCreateDbSection() {
  var createDb = document.getElementById("create-new-database");
  var deleteDb = document.getElementById("delete-database");
  deleteDb.style.display = "none";
  if (createDb.style.display === "none") {
      console.log("create")
      createDb.style.display = "block";
  }
}
function showDeleteDbSection() {
  var createDb = document.getElementById("create-new-database");
  var deleteDb = document.getElementById("delete-database");
  createDb.style.display = "none";
  if (deleteDb.style.display === "none") {
      console.log("delete")
      deleteDb.style.display = "block";
  }
}

function showAddSection() {
  resetAlterSubSections();
  var addLoad = document.getElementById("load-add-table");
  var alterLoad = document.getElementById("load-alter-table");
  var deleteLoad = document.getElementById("load-delete-table");
  alterLoad.style.display = "none";
  deleteLoad.style.display = "none";
  if (addLoad.style.display === "none") {
      console.log("add")
      addLoad.style.display = "block";
  }
}
function showAlterSection() {
  resetAlterSubSections();
  var addLoad = document.getElementById("load-add-table");
  var alterLoad = document.getElementById("load-alter-table");
  var deleteLoad = document.getElementById("load-delete-table");
  addLoad.style.display = "none";
  deleteLoad.style.display = "none";
  if (alterLoad.style.display === "none") {
      console.log("add")
      alterLoad.style.display = "block";
  }
}
function showDeleteSection() {
  resetAlterSubSections();
  var addLoad = document.getElementById("load-add-table");
  var alterLoad = document.getElementById("load-alter-table");
  var deleteLoad = document.getElementById("load-delete-table");
  addLoad.style.display = "none";
  alterLoad.style.display = "none";
  if (deleteLoad.style.display === "none") {
      console.log("add")
      deleteLoad.style.display = "block";
  }
}

function showSortEntries() {
  var sort = document.getElementById("sort-entries-container");
  var hide = document.getElementById("hide-entries-container");
  hide.style.display = "none";
  if (sort.style.display === "none") {
      console.log("sort")
      sort.style.display = "block";
  }
}
function showHideEntries() {
  var sort = document.getElementById("sort-entries-container");
  var hide = document.getElementById("hide-entries-container");
  sort.style.display = "none";
  if (hide.style.display === "none") {
      console.log("hide")
      hide.style.display = "block";
  }
}

function resetAlterSubSections(){
  var addLoad = document.getElementById("load-add-table");
  var alterLoad = document.getElementById("load-alter-table");
  var deleteLoad = document.getElementById("load-delete-table");
  addLoad.selectedIndex = 0;
  alterLoad.selectedIndex = 0;
  deleteLoad.selectedIndex = 0;
  var addGraphic = document.getElementById("add-graphic-novel");
  var alterGraphic = document.getElementById("alter-graphic-novel");
  var deleteGraphic = document.getElementById("delete-graphic-novel");
  var addComic = document.getElementById("add-comic-issue");
  var alterComic = document.getElementById("alter-comic-issue");
  var deleteComic = document.getElementById("delete-comic-issue");
  addGraphic.style.display = "none";
  alterGraphic.style.display = "none";
  deleteGraphic.style.display = "none";
  addComic.style.display = "none";
  alterComic.style.display = "none";
  deleteComic.style.display = "none";
}
function resetManageSubSections(){
  var createDb = document.getElementById("create-new-database");
  var deleteDb = document.getElementById("delete-database");
  createDb.style.display = "none";
  deleteDb.style.display = "none";
}
function resetViewOptionsSubSections(){
  var sort = document.getElementById("sort-entries-container");
  var hide = document.getElementById("hide-entries-container");
  sort.style.display = "none";
  hide.style.display = "none";
}
function hideTableDropdown(){
  console.log("========")
  var addLoad = document.getElementById("load-add-table");
  var alterLoad = document.getElementById("load-alter-table");
  var deleteLoad = document.getElementById("load-delete-table");
  addLoad.style.display = "none";
  alterLoad.style.display = "none";
  deleteLoad.style.display = "none";
}