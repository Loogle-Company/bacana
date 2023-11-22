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
const toggleButton3 = document.getElementById("toggleButton3");
const toggleButton4 = document.getElementById("toggleButton4");
const toggleButton5 = document.getElementById("toggleButton5");
const toggleButton6 = document.getElementById("toggleButton6");
const toggleButton7 = document.getElementById("toggleButton7");
const toggleButton8 = document.getElementById("toggleButton8");
const toggleButton9 = document.getElementById("toggleButton9");
const toggleButton10 = document.getElementById("toggleButton10");
const toggleButton11 = document.getElementById("toggleButton11");
const toggleButton12 = document.getElementById("toggleButton12");
const toggleButton13 = document.getElementById("toggleButton13");
const toggleButton14 = document.getElementById("toggleButton14");
const toggleButton15 = document.getElementById("toggleButton15");
const toggleButton16 = document.getElementById("toggleButton16");
const toggleButton17 = document.getElementById("toggleButton17");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const cards = [
    document.getElementById("card1"),
    document.getElementById("card2"),
    document.getElementById("card3"),
    document.getElementById("card4"),
    document.getElementById("card5"),
    document.getElementById("card6"),
    document.getElementById("card7"),
    document.getElementById("card8"),
    document.getElementById("card9"),
    document.getElementById("card10"),
    document.getElementById("card11"),
    document.getElementById("card12"),
    document.getElementById("card13"),
    document.getElementById("card14"),
    document.getElementById("card15"),
    document.getElementById("card16"),
    document.getElementById("card17")
];
let currentIndex = 0;

toggleButton1.addEventListener("click", function () {
    showCard(0);
});

toggleButton2.addEventListener("click", function () {
    showCard(1);
});

toggleButton3.addEventListener("click", function () {
    showCard(2);
});

toggleButton4.addEventListener("click", function () {
    showCard(3);
});

toggleButton5.addEventListener("click", function () {
    showCard(4);
});

toggleButton6.addEventListener("click", function () {
    showCard(5);
});

toggleButton7.addEventListener("click", function () {
    showCard(6);
});

toggleButton8.addEventListener("click", function () {
    showCard(7);
});

toggleButton9.addEventListener("click", function () {
    showCard(8);
});

toggleButton10.addEventListener("click", function () {
    showCard(9);
});

toggleButton11.addEventListener("click", function () {
    showCard(10);
});

toggleButton12.addEventListener("click", function () {
    showCard(11);
});

toggleButton13.addEventListener("click", function () {
    showCard(12);
});

toggleButton14.addEventListener("click", function () {
    showCard(13);
});

toggleButton15.addEventListener("click", function () {
    showCard(14);
});

toggleButton16.addEventListener("click", function () {
    showCard(15);
});

toggleButton17.addEventListener("click", function () {
    showCard(16);
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
