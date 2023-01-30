const images = ["0.PNG", "1.JPEG", "2.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//javascript를 이용하여 html에 새로운 element 추가하기

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.width = 300;
bgImage.height = 300;

document.body.appendChild(bgImage); //이 코드에서 appendChild 함수가 하는 일은 body의 자식으로 bgImage를 추가하는 것이다.
