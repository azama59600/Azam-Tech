function myFunction(){
    var x = document.getElementById("result-container");


    var userInputValue = document.getElementById('searchTxt').value;
    console.log("User Input Value: " + userInputValue);  
        
    var marvelCharacterSite = ("https://www.marvel.com/characters/")

    var userCharacterSite = ("https://www.marvel.com/search?limit=20&query=" + userInputValue + "&offset=0&content_type=characters")
    var userComicsSite = ("https://www.comixology.co.uk/search?search=" + userInputValue)
    var userMoviesSite = ("https://www.marvel.com/search?limit=20&query=" + userInputValue + "&offset=0&content_type=movies")
    var userTvSite = ("https://www.marvel.com/search?limit=20&query=" + userInputValue + "&offset=0&content_type=tv")

    document.getElementById('characterIframe').src = userCharacterSite;
    document.getElementById('comicsIframe').src = userComicsSite;
    document.getElementById('movieIframe').src = userMoviesSite;
    document.getElementById('tvIframe').src = userTvSite;

    console.log("Character Site: " + userCharacterSite);  
    console.log("Comics Site: " + userComicsSite);  
    console.log("Movie Site: " + userMoviesSite);  
    console.log("TV series Site: " + userTvSite);  
};
