const whatdate = document.querySelector("#today");

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const today = date.getDate();
  console.log(`today is ${year}/${month}/${today}`);

  whatdate.innerText = `${year}년 ${month}월 ${today}일`;
}

getToday();
