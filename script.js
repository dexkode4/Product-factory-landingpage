let message = document.getElementById("success");
let input = document.getElementById("mail");
let email = document.getElementById("email");

const submit = (e) => {
  e.preventDefault();
  console.log("email submitted!!");
  if (email.value) {
    message.style.display = "block";
    email.value = "";
  }
};

input.addEventListener("submit", submit);
