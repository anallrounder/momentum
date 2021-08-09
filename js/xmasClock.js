const clock = document.querySelector("#clock");

function getClock() {
  const now = new Date();
  const cristmasEve = new Date("2021, 12, 24");

  const elapsed = new Date();
  elapsed.setTime(cristmasEve.getTime() - now.getTime());

  /* 
  1s = 1,000msc
  1m = 1000 * 60
  1h = 1000 * 60 * 60
  1d = 1000 * 60 * 60 * 24
  */
  const days = Math.ceil(elapsed / (1000 * 60 * 60 * 24));
  const hours = String(elapsed.getHours()).padStart(2, "0");
  const minutes = String(elapsed.getMinutes()).padStart(2, "0");
  const seconds = String(elapsed.getSeconds()).padStart(2, "0");

  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);