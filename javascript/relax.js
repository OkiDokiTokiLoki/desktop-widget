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

const restartSong = song =>{
    let currentTime = song.currentTime;
    song.currentTime = 0;
}

// Countdown timer
timeSelect.forEach(option => {
    option.addEventListener("click", function() {
      someDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(someDuration / 60)}:${Math.floor(someDuration % 60)}0`;
    });
});

// Play/Pause function
const checkPlaying = song => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "../media/img/relax-img/pause.svg";

      // setTimeout(function() {
      //   const timer = document.querySelectorAll('.timer-btn');
      //   timer.style.visibility = 'hidden';
      // }, 1500);

      // setTimeout(function(){ 
      //   alert("Hello"); 
      // }, 3000);
    } else {
      song.pause();
      video.pause();
      play.src = "../media/img/relax-img/play.svg";
    }
};

// Animation of progress bar
song.ontimeupdate = function() {
    let currentTime = song.currentTime;
    let elapsed = someDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    timeDisplay.textContent = `${minutes}:${seconds}`;
    let progress = outlineLength - (currentTime / someDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;
  
    if (currentTime >= someDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = "../media/img/relax-img/play.svg";
      video.pause();
    }
};


function fade(){
  const timer = document.querySelectorAll('.timer-btn');
  timer.style.visibility = 'hidden';
}

// remove interface elements to view the video while relaxing