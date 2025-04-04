// URL do streaming da rádio
const radioUrl = "http://stm2.aovivodigital.com.br:11354";

// Criar o elemento de áudio
const audio = new Audio(radioUrl);
let isPlaying = false;

// Botão Play/Pause
const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = "▶";
    } else {
        audio.play();
        playPauseBtn.textContent = "⏸";
    }
    isPlaying = !isPlaying;
});
