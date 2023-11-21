// Função para inicializar o script quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    // Botões "Ler mais"
    const readButtons = document.querySelectorAll('.read_button');
    readButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleCard(button);
        });
    });

    // Botões de alternância e navegação
    const toggleButtons = document.querySelectorAll('.toggle_button');
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    toggleButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            showCard(index);
        });
    });

    prevButton.addEventListener("click", function () {
        showCard((currentIndex - 1 + cards.length) % cards.length);
    });

    nextButton.addEventListener("click", function () {
        showCard((currentIndex + 1) % cards.length);
    });

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
