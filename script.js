let message = document.getElementById("success");
let input = document.getElementById("mail");
let email = document.getElementById("email");
let links = document.querySelectorAll(".navigation__link");
let check = document.querySelector(".navigation__checkbox");

const submit = (e) => {
  e.preventDefault();
  if (email.value) {
    message.style.display = "block";
    email.value = "";
  }
};

input.addEventListener("submit", submit);

links.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

let showMenu = false;

function toggleMenu() {
  check.checked = false;
}
