const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const declineButton = document.getElementById("decline-button");
const acceptButton = document.getElementById("accept-button");

let hasClicked;

window.onbeforeunload = function( ) {
    if(hasClicked) return true;
};

function buttonClick(event) {
    event.preventDefault();
    if(!hasClicked) hasClicked = true;
    overlay.classList.add("hidden");
    video.play();
    videoClick();
}

function videoClick(event) {
    if(event) event.preventDefault();
    // if not fullscreen
    const { documentElement } = document;
    if(documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if(documentElement.msRequestFullscreen) full.msRequestFullscreen();
}

acceptButton.addEventListener("click", buttonClick);
declineButton.addEventListener("click", buttonClick);
video.addEventListener("click", videoClick);