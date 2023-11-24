// Selecione todos os botões "Ler mais"
var buttons = document.querySelectorAll('.read_button');

// Adicione um evento de clique a cada botão
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Selecione o card associado ao botão
        var card = button.parentElement;

        // Adicione/Remova a classe "active1"
        card.classList.toggle('active');

        if (card.classList.contains('active')) {
            // Altere o texto do botão se ele tiver a classe "active1"
            button.textContent = 'Ler menos';
        } else {
            // Altere o texto do botão se ele não tiver a classe "active1"
            button.textContent = 'Ler mais';
        }
    });
});



const toggleButton1 = document.getElementById("toggleButton1");
const toggleButton2 = document.getElementById("toggleButton2");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const cards = [document.getElementById("card1"), document.getElementById("card2")];
let currentIndex = 0;

toggleButton1.addEventListener("click", function () {
    showCard(0);
});

toggleButton2.addEventListener("click", function () {
    showCard(1);
});

prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
});

nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
});

function showCard(index) {
    cards.forEach((card, i) => {
        card.style.display = i === index ? "flex" : "none";
    });
    currentIndex = index;
}
