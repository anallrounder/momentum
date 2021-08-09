const images = ["0.jpg", "1.jpg", "2.jpg"];

function handleBackgroundChange() {
  const chosenImage = images[Math.floor(Math.random() * images.length)]; //이걸 함수 안에 넣어줘야 랜덤 계속 생성할 수 있다.
  document.body.style.backgroundImage = `url("../img/${chosenImage}")`; // css에서 하이픈있는것들 background-image -> bacgroundImage로 써야한다.
}

handleBackgroundChange();
setInterval(handleBackgroundChange, 60000);


