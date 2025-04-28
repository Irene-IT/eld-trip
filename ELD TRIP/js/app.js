const btn = document.querySelector(".btn");
const regictration = document.querySelector(".regictration");
const form = document.querySelector(".form");

const body = document.querySelector("body");

console.log(btn);
console.log(regictration);
console.dir(regictration);

btn.addEventListener("click", function () {
  console.log(1111);
});

btn.addEventListener("click", function () {
  regictration.style.display = "flex";
  body.style.overflowY = "hidden";
});

form.addEventListener("click", function (e) {
  e.stopPropagation();
});

regictration.addEventListener("click", function () {
  regictration.style.display = "none";
  body.style.overflow = "auto";
});

// PASSWORD VISIBILITY ON CLICK - START
const inputIcon = document.querySelector(".eye");
const inputPassword = document.querySelector("#password");

inputIcon.addEventListener("click", () => {
  inputIcon.classList.toggle("ri-eye-off-line");
  inputIcon.classList.toggle("ri-eye-line");
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
});
// / PASSWORD VISIBILITY ON CLICK - END
