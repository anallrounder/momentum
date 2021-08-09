const clock = document.querySelector("h2#clock");
const amPm = document.querySelector("#ampm");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (date.getHours() > "9") {
    amPm.className = "fas fa-moon";
    amPm.innerText = " PM"
  } else {
    amPm.className = "fas fa-sun";
    amPm.innerText = " AM"
  }

  clock.innerText = `${hours}:${minutes}:${seconds}`;

  //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


getClock();
setInterval(getClock, 1000);
//setTimeout(getClock, 1000);
