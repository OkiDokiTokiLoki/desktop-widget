const song = document.querySelector(".audio");  
const play = document.querySelector(".play");  // Play button
const outline = document.querySelector(".moving-outline circle");  // Progress bar
const video = document.querySelector(".vid-container video");
const sounds = document.querySelectorAll(".mood button");
const timeDisplay = document.querySelector(".display");
const outlineLength = outline.getTotalLength();  // Refering to the outline of the progress bar
const timeSelect = document.querySelectorAll(".timer button");
let someDuration = 600;  // The duration is not based on the duration of each song but rather one being set by us as a standard

outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(someDuration / 60)}:${Math.floor(someDuration % 60)}0`;

sounds.forEach(sound => {
    sound.addEventListener("click", function() {
        song.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");
        checkPlaying(song);
    });
});

play.addEventListener("click", function() {
    checkPlaying(song);
});

// Play/Pause function
const checkPlaying = song => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./img/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./img/play.svg";
    }
};