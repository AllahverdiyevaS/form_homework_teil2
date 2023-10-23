const lightMode = document.querySelector("#input-toggle");

if (localStorage.getItem("lightMode") === "enabled") {
  document.body.classList.add("light");
  lightMode.checked = true;
}

lightMode.addEventListener("change", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    localStorage.setItem("lightMode", "enabled");
  } else {
    localStorage.setItem("lightMode", "disabled");
  }
});

const form2 = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
let userArray = JSON.parse(localStorage.getItem("user")) || [];

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUser = {
    email: email.value,
    password: password.value,
  };
  userArray.push(newUser);
  console.log(userArray);
  localStorage.setItem("user", JSON.stringify(userArray));

  email.value = "";
  password.value = "";
});
