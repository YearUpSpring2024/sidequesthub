"use strict";

window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyEl = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(audio)
    if (!audio) return;
    audio.currentTime = 0; //to restart from beginning
    audio.play();
    console.log(keyEl);
    keyEl.classList.add("playing");


    function removeTransition(e) {
        console.log(e);
        if (e.propertyName !== 'transform') return;
        console.log(e.propertyName);
        console.log(this);
        this.classList.remove("playing");
    }
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", removeTransition))
})
