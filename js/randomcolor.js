const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const degree = [
  "0deg",
  "45deg",
  "90deg",
  "135deg",
  "180deg",
  "235deg",
  "270deg",
  "315deg"
];

const button = document.querySelector("button");

function handleBackgroundColor() {
  //랜덤각도 배정
  const randomDegree = degree[Math.floor(Math.random() * degree.length)];
  //랜덤색상 배정
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];

  //버튼 누르면 배경색 css수정
  document.body.style.background = `linear-gradient(${randomDegree}, ${firstColor}, ${secondColor})`;

  console.log(
    (document.body.style.background = `linear-gradient(${randomDegree}, ${firstColor}, ${secondColor})`)
  );
}

button.addEventListener("click", handleBackgroundColor);
