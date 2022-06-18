const userName = document.querySelector(".mainName");
const clock = document.querySelector(".clock");
const logout = document.querySelector(".logout");

userName.innerHTML = localStorage.getItem("name");
clock.innerHTML = "00:00";

const showClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

setInterval(showClock, 1000);

const logoutLogic = () => {
  if (!confirm("Are you sure you want to logout?")) {
    return null;
  } else {
    window.location.href = "./index.html";
  }
};

logout.addEventListener("click", logoutLogic);
