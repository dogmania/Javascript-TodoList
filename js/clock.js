const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //이게 없으면 처음 1초동안은 00:00:00이 뜨다가 1초후에 시계가 화면에 출력
setInterval(getClock, 1000);

//setInterval(sayHello, 5000); //setInterval 함수는 첫번째 argument에 함수 이름을 쓰고 두번째 argument에 시간을 ms 단위로 쓴다. 그러면 setInterval 함수가 정해진 시간마다 함수를 반복적으로 실행해준다.
//setTimeout(sayHello, 5000); //setTimeout 함수와 setTimeout 함수의 차이점은 setInterval 함수는 정해진 시간이 지날 때마다 함수를 반복실행하고 setTimeout 함수는 정해진 시간이 지나면 함수를 한번만 실행한다.

//date Object 활용해보기**********
// const date = new Date();

// date.getDate();// 오늘이 9월 8일이면 8을 출력
// date.getDay();//오늘이 목요일이면 4를 출력, 일요일이 0
// date.getFullYear();//오늘이 2022년이면 2022출력
// date.getHours();//현재 20시 46분이면 20 출력
// date.getMinutes();//현재 20시 48분이면 48 출력
// date.getSeconds();//현재시간이 20시 58분 32초면 32 출력

//"1"을 "01"로 바꾸기*******************
//"1".padStart(2, "0"); //String의 길이를 최소 2로 설정하는데 만약 String의 길이가 2보다 작다면 빈자리를 "0"으로 채우고 String의 최소 길이가 2이므로 2를 넘는 String이라면 모두 출력한다.
