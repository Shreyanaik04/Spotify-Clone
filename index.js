console.log("Welcome to Spotify")
document.addEventListener("DOMContentLoaded", function() {
    // Create an array to store Audio objects
    const audioPlayers = [];

    // Selecting all elements with the class "play-button" and adding an event listener to each of them
    document.querySelectorAll(".play-button").forEach((button, index) => {
        // Create an Audio object for each button and store it in the array
        const audio = new Audio();
        audioPlayers.push(audio);

        button.addEventListener("click", function() {
            const songSrc = this.getAttribute("data-src");
            const audio = audioPlayers[index]; // Get the corresponding Audio object from the array

            // Check if the audio is currently paused
            if (audio.paused) {
                // If paused, play the audio
                audio.src = songSrc;
                audio.play();
            } else {
                // If playing, pause the audio
                audio.pause();

            }
        });
    });
});




// let songs =[
//     {songName:"Tu-aisa-kaise-hai",filePath:"song/1.mp3",coverPath:"covers/1.jpg" },
//     {songName:"Tu-aisa-kaise-hai",filePath:"song/2.mp3",coverPath:"covers/2.jpg"}
// ]

// audioElement.play();

// Handle play/pause click


// Listen to Events
// progressBar.addEventListener('timeupdate',()=>{
//     console.log('timeupdate')
// })


// let button = document.getElementById("playbutton");
// let audio = new Audio('./song/song1.mp3');
 

// button.addEventListener("click", () => {
//    if(isPlaying){
//     audio.pause();
//     isPlaying=false;
//    }
//    else{
//     audio.play();
//     isPlaying=true;
//    }
// });

// Listen to events






