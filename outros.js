//  ABRIR MENU  


var menu = document.querySelector(".menu"); // Seleciona o elemento com a classe "menu"

function openMenu() {
  menu.style.display = "block";
  var openingHeight = 0; // Altura inicial do menu abrindo (em pixels)
  var interval = setInterval(function() {
    if (openingHeight < 100) {
      menu.style.clipPath = `polygon(0 0, 100% 0, 100% ${openingHeight}%, 0 ${openingHeight}%)`;
      openingHeight += 5; // Aumenta a altura gradualmente
    } else {
      clearInterval(interval); // Limpa o intervalo quando o menu estiver totalmente aberto
      menu.style.clipPath = "none"; // Restaura o clipPath para a forma original
    }
  }, 20); // Intervalo de tempo em milissegundos entre cada movimento
}

// FECHAR MENU

function closeMenu() {
  var closingHeight = 100; // Altura inicial do menu fechando (em pixels)
  var interval = setInterval(function() {
    if (closingHeight > 0) {
      menu.style.clipPath = `polygon(0 0, 100% 0, 100% ${closingHeight}%, 0 ${closingHeight}%)`;
      closingHeight -= 5; // Diminui a altura gradualmente
    } else {
      clearInterval(interval); // Limpa o intervalo quando o menu estiver totalmente fechado
      menu.style.display = "none";
      menu.style.clipPath = "none"; // Restaura o clipPath para a forma original
    }
  }, 20); // Intervalo de tempo em milissegundos entre cada movimento
}

document.querySelector(".buttonstart").addEventListener("click", openMenu);
document.querySelector("#buttonclose").addEventListener("click", closeMenu);



// CERTIDAO DIGITAL

function redirecionarParaCertidaoDigital() {
  // Redirecionar para a página correspondente à Certidão Digital
  window.location.href = "./escolha/flip-two/index.html";
}

function redirecionarParaPesquisaQualificada() {
  // Redirecionar para a página correspondente à Pesquisa Qualificada
  window.location.href = "./escolha/index.html";
}

function redirecionarParaCentralEletronica() {
  // Redirecionar para a página correspondente à Central Eletrônica
  window.location.href = "central_eletronica.html"; 
}

function redirecionarParaUsucapiao() {
  // Redirecionar para a página correspondente à Usucapião
  window.location.href = "/usucapiao.html";
}
