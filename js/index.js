const saveName = document.querySelector("form");
const inputName = document.querySelector(".inputText");

saveName.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputName.value === "" || inputName.value === undefined) {
    alert("Enter your name");
  }

  localStorage.setItem("name", inputName.value);
  if (inputName.value) {
    window.location.href = "./main.html";
  }
});
