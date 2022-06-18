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
  if (
    !confirm(
      `All information is initialized upon logout.\nWould you like to continue?`
    )
  ) {
    return null;
  } else {
    localStorage.clear();
    window.location.href = "./index.html";
  }
};

logout.addEventListener("click", logoutLogic);
