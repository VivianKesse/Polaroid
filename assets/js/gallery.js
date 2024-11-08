document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const modal = document.querySelector(".modal");
  const modalImg = modal.querySelector(".modal-content img");
  const closeBtn = modal.querySelector(".close");
  const prevBtn = modal.querySelector(".prev");
  const nextBtn = modal.querySelector(".next");
  let currentImageIndex = 0;
  const images = Array.from(gallery.getElementsByTagName("img"));

  // Abrir modal ao clicar na imagem
  gallery.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      currentImageIndex = images.indexOf(e.target);
    }
  });

  // Fechar modal
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Fechar modal ao clicar fora da imagem
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Navegar para a imagem anterior
  prevBtn.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImageIndex].src;
  });

  // Navegar para a próxima imagem
  nextBtn.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImg.src = images[currentImageIndex].src;
  });

  // Navegação com teclas do teclado
  document.addEventListener("keydown", function (e) {
    if (modal.style.display === "block") {
      if (e.key === "ArrowLeft") {
        currentImageIndex =
          (currentImageIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentImageIndex].src;
      } else if (e.key === "ArrowRight") {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImg.src = images[currentImageIndex].src;
      } else if (e.key === "Escape") {
        modal.style.display = "none";
      }
    }
  });
});
