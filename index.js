const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-menu");
console.log(menu);
burger.addEventListener("click", toggleBurger);

function toggleBurger() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("active");
}

menu.addEventListener("click", (event) => {
  if(event.target.classList.contains('list-item-link')) toggleBurger();
});