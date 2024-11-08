const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const options = document.querySelectorAll(".options a");
const submit = document.querySelector(".submit");
const form = document.getElementById("form");
const productSection = document.getElementById("product-section");
const welcomeMessage = document.getElementById("welcome-message");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

options.forEach((option) => {
  option.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  welcomeMessage.textContent = `Hello, ${name}!`;

  form.classList.add("hidden");
  productSection.classList.remove("hidden");
});
