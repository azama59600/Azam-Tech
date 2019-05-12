function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}


function whenFinished(){
    console.log("Item: " + videoList[i]);
    vidURL = videoList[i];
    console.log("i: " + i);
    //console.log(vid + " " + vidURL)
    // Set the source to the selected URL
    $("#myVideo")[0].src = vidURL;
    $("#myVideo")[0].load();
    // Play the selected URL
    $("#myVideo").get(0).play();  
    
    i = i + 1;
    console.log("Array Length: " + arrayLength);
    console.log("i: " + i);
    
    console.log("-------||-------");

    if (i >= arrayLength){
        videoList = shuffle(videoList);
        i = 0;
    }
}


// Get the playlist from the available URLs on the list 
playlist = $('#playlist');
tracks = playlist.find('li a');
len = tracks.length - 1;

var videoList = [];
videoList.push("vid/The-Punisher-Fight-Against-Anvil.mp4");
videoList.push("vid/The-Punisher-Shoot-Pillar.mp4");
videoList.push("vid/BVS-Warehouse-Fight.mp4");
videoList.push("vid/Titans-JT-vs-Cops.mp4");
videoList.push("vid/Daredevil-First-Hallway-Fight-Scene.mp4");
videoList.push("vid/DKR-Bane-vs-Batman.mp4");
videoList.push("vid/Deadpool-2-Xmen-Origins-Joke.mp4");
videoList.push("vid/Avengers-2-Iron-Man-Dive.mp4");
videoList.push("vid/Logan-Berzerker.mp4");
videoList.push("vid/Doom-Patrol-Cyborg.mp4");
videoList.push("vid/Batman-Begins-Training.mp4");


console.log("videoList: " + videoList);
console.log(len);

// Shuffle List
videoList = shuffle(videoList);
console.log("Shuffled List: " + videoList);
// Retrieve List length
arrayLength = videoList.length;

var i = 0;

console.log("----STARTED----");
whenFinished();

document.getElementById('myVideo').addEventListener('ended',whenFinished,false);