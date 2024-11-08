const myCarousel = document.getElementById("myCarousel");

myCarousel.addEventListener("slide.bs.carousel", function () {
    const activeItem = this.querySelector(".active");
    document.querySelector(".testi-img img").src =
        activeItem.getAttribute("data-img");

    document.querySelector(".testi-img .circle").style.backgroundColor =
        activeItem.getAttribute("data-color");
});
