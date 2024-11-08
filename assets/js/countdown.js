// Definindo a data final da promoção
const promotionEndDate = new Date("2024-11-30T23:59:59").getTime();

// Atualizando o timer a cada segundo
const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = promotionEndDate - now;

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibindo o timer na página
  document.getElementById(
    "countdown"
  ).innerHTML = `<span>${hours}h</span> <span>${minutes}m</span> <span>${seconds}s</span>`;

  // Se a contagem regressiva chegar a zero
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "A promoção acabou!";
  }
}, 1000);
