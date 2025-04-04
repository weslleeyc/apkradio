// URL do streaming da rádio
const radioUrl = "https://stm2.aovivodigital.com.br:11354/stream";

// Criar o elemento de áudio
const audio = new Audio(radioUrl);
let isPlaying = false;

// Botão Play/Pause
const playPauseBtn = document.getElementById("playPauseBtn");
const equalizerBars = document.querySelectorAll(".equalizer span");

playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.src = "play.png"; // Imagem de Play
        stopEqualizer();
    } else {
        audio.play();
        playPauseBtn.src = "pause.png"; // Imagem de Pause
        startEqualizer();
    }
    isPlaying = !isPlaying;
});

// Função para ativar a animação do equalizador
function startEqualizer() {
    equalizerBars.forEach((bar, index) => {
        bar.style.animation = `equalizerAnim 1s infinite ease-in-out ${index * 0.2}s`;
    });
}

// Função para parar a animação do equalizador
function stopEqualizer() {
    equalizerBars.forEach((bar) => {
        bar.style.animation = "none";
    });
}

// Botão de Compartilhar
const shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: "Rádio Play Mix",
            text: "Ouça a Rádio Play Mix ao vivo!",
            url: window.location.href
        }).catch(console.error);
    } else {
        alert("Seu navegador não suporta compartilhamento.");
    }
});
