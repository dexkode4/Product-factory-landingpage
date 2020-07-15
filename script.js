let message = document.getElementById("success");
let input = document.getElementById("mail");
let email = document.getElementById("email");
let background = document.querySelector(".navigation__background");
let links = document.querySelectorAll(".navigation__link");
let check = document.querySelector(".navigation__checkbox");
let nav = document.querySelector(".navigation__nav");

const submit = (e) => {
  e.preventDefault();
  console.log("email submitted!!");
  if (email.value) {
    message.style.display = "block";
    email.value = "";
  }
};

input.addEventListener("submit", submit);

// links.forEach((link) => {
//   link.addEventListener("click", toggleMenu);
// });

// let showMenu = false;

function toggleMenu() {
  console.log("clicked");
}

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
