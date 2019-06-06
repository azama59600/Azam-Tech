function showApplication() {
    var welcome = document.getElementById("comic-tracker-start-section");
    var application = document.getElementById("comic-tracking-application");
    if (application.style.display === "none") {
        console.log("askjdlfgj")
        welcome.style.display = "none";
        application.style.display = "block";
    }
  }

  function showManageDatabases() {
    var alter = document.getElementById("comic-tracker-alter-section");
    var manage = document.getElementById("comic-tracker-manage-section");
    if (manage.style.display === "none") {
        console.log("askjdlfgj")
        alter.style.display = "none";
        manage.style.display = "block";
    }
  }