const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username";

const link = document.querySelector("a");

// function onLoginSubmit() {
//   const username = loginInput.value;
//   console.log(username);
// }

function onLoginSubmit(event) {
  //EventListener이 호출한 함수의 첫번째 argument로 tomato를 설정하면 즉, javascript에게 공간을 제공해주면 javascript는 방금 일어난 event에 대한 정보를 argument에 채워넣는다. EventListener에 어떤 함수를 제공하든 간에 javascript는 그 함수의 첫번째 argument에 발생된 event에 대한 정보를 준다.
  event.preventDefault(); //preventDefault 함수의 역할은 어떤 event의 기본 행동이 발생되지 않도록 막는 일을 한다. 예를 들어 누군가 form을 submit하면 브라우저가 기본적으로 페이지를 새로고침하는 것과 같이 어떤 함수에 대해 브라우저가 기본적으로 하는 행동들을 막는 역할을 한다.
  loginForm.classList.add(HIDDEN_CLASSNAME); //html form 태그에 css에 작성해둔 hidden class를 추가하여 유저가 이름을 입력한 후 페이지에서 form을 지운다.
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username); //localStorage는 작은 DB라고 생각하면 된다. localStorae와 관련된 함수에는 setItem,getItem,removeItem이 있다.
  paintGreeting(username);
}

function handleLinkClick(event) {
  //브라우저는 링크를 클릭하면 해당 사이트로 이동하도록 설정되어 있는데 event argument를 이용하여 preventDefault 함수를 실행시키면 그 기본 동작이 실행되지 않도록 한다.
  event.preventDefault();
  console.dir(event);
  console.log(event);
  // alert("clicked!");
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`; //greeting.innerText = "Hello " + username; 이 코드와 같은 문장
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
