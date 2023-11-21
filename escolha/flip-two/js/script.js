document.addEventListener("DOMContentLoaded", function () {
    // Botões "Ler mais"
    const readButtons = document.querySelectorAll('.read_button');
    readButtons.forEach((button) => {
        button.addEventListener('click', () => toggleCard(button));
    });

    // Botões de alternância e navegação
    const toggleButtons = document.querySelectorAll('.toggle_button');
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    // Adiciona eventos aos botões de alternância
    toggleButtons.forEach((button, index) => {
        button.addEventListener("click", () => showCard(index));
    });

    // Adiciona eventos aos botões de navegação
    prevButton.addEventListener("click", () => showCard((currentIndex - 1 + cards.length) % cards.length));
    nextButton.addEventListener("click", () => showCard((currentIndex + 1) % cards.length));

    // Função para alternar a visibilidade do card e atualizar o texto do botão
    function toggleCard(button) {
        const card = button.closest('.card');
        if (card) {
            card.classList.toggle('active');
            button.textContent = card.classList.contains('active') ? 'Ler menos' : 'Ler mais';
        }
    }

    // Função para exibir um determinado card e ocultar os outros
    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? "flex" : "none";
        });
        currentIndex = index;
    }
});

