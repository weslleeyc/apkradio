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

// Rotação de banners
const banners = ["banner1.png", "banner2.png"];
let currentBanner = 0;

const bannerElement = document.getElementById("banner");

// Define o tamanho do banner
bannerElement.style.width = "100%"; // Mantém a largura ajustável
bannerElement.style.maxHeight = "80px"; // Define uma altura menor

setInterval(() => {
    currentBanner = (currentBanner + 1) % banners.length;
    bannerElement.src = banners[currentBanner];
}, 5000); // troca a cada 5 segundos

