function myFunction(){
    var userInputValue = document.getElementById('searchTxt').value;
    console.log("User Input Value: " + userInputValue);  
    
    document.getElementById("comicCharacterTitle").innerHTML = userInputValue;

    var dcCharacterSite = ("https://www.dccomics.com/characters/" + userInputValue)
    
};
