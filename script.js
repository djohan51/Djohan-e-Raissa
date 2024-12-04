// Defina a data de início (6 de novembro de 2024, 17:57:00)
const startDate = new Date("2024-11-06T17:57:00"); // Data e hora desejadas

function updateTimer() {
    const now = new Date();
    const elapsed = now - startDate;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // Média de dias por mês
    const years = Math.floor(months / 12);

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months % 12; // Módulo para meses restantes
    document.getElementById('days').textContent = days % 30; // Módulo para dias restantes
    document.getElementById('hours').textContent = hours % 24; // Módulo para horas restantes
    document.getElementById('minutes').textContent = minutes % 60; // Módulo para minutos restantes
    document.getElementById('seconds').textContent = seconds % 60; // Módulo para segundos restantes
}

// Atualiza o temporizador a cada segundo
setInterval(updateTimer, 1000);

// Chama a função uma vez para inicializar
updateTimer();

// Slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
 setTimeout(showSlides, 7000); // Muda a imagem a cada 5 segundos
}

// Inicia o slideshow
showSlides();