const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const msg = document.querySelector("#msg");
const btn = document.querySelector("#btn");

form.onsubmit = (e) => {
  e.preventDefault();
  if (username.value.trim() === "" || password.value.trim() === "") {
    msg.classList.remove("text-info");
    msg.classList.add("text-danger");
    msg.innerText = "Username and password is required!";
    setTimeout(() => {
      username.value = "";
      password.value = "";
      msg.innerText = "";
    }, 2000);
  } else {
    msg.classList.remove("text-danger");
    msg.classList.add("text-info");
    msg.innerText = "Submitted Successfully!";
    setTimeout(() => {
      username.value = "";
      password.value = "";
      msg.innerText = "";
    }, 2000);
  }
};
