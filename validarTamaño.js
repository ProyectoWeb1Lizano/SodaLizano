const hamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

hamburguesa.addEventListener("click", () => {
  menu.classList.toggle("abierto");
});
