const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

// const toDos = [];
//toDos를 const toDos[]로 선언했을 때 발생하는 문제는 기존에 array에 저장되어 있던 요소를 그대로 두고 새로운 값을 입력했을 때 local Storage에는 그 값이 저장되어 있지만
//array가 비어있는 상태로 코드가 시작되므로 기존에 array에 저장되어 있던 값들이 array에서 사라지고 새로 입력된 값들만 array에 저장된다.
let toDos = [];
//이런 형태로 array를 선언한 후 localStorage에 저장되어 있는 값들을 이후의 코드에서 toDos array에 저장해주는 작업을 해주면
//localStorage에 저장되어 있던 기존 값들도 array에 저장되고 새로 입력되는 값들도 함께 array에 저장할 수 있다.

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify는 javascript object나 array 또는 어떤 javascript 코드든지 String으로 바꿔줌, 이때 주의해야 할 점은 우리가 저장한 toDos는 array의 모습을 띈 String이라서 실제 array처럼 사용할 수는 없다. 실제 array처럼 사용하려면 parse 작업이 필요함
}

function deleteToDo(event) {
  //ToDolist의 x버튼을 눌렀을 때 어떤 것을 지워야하는지 결정하는 것은 event argument를 이용하여 알아낼 수 있다.
  const li = event.target.parentElement; //이 코드에서 event.target이 의미하는 것이 클릭이 된 x버튼이고 그것의 parentElemet인 li가 지워야 할 대상이다.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //filter 함수에 대한 설명은 아래에 적어둠,이때 주의해야 할 점은 toDo.id는 숫자고 li.id는 String이므로 형변환을 통해 l-value와 r-value의 타입을 맞춰줘야 한다.
  li.remove();
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //id를 부여하는 이유는 array에 저장되는 값들을 id로 구분하기 위해서 부여하는 것이다.
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //우리가 위에서 String화 시켜서 저장해둔 array를 savedToDos에 할당

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); //JSON.parse는 단순히 String 상태였던 array를 실제 우리가 무언가 작업을 할 수 있는 array로 바꿔줌
  //   parsedToDos.forEach(); //forEach 함수는 array의 각 item에 대해서 함수를 실행시켜줌
  //   parsedToDos.forEach((item) => console.log("this is the turn of ", item));
  //이 코드가 의미하는 것은 parsedToDos array의 각 item을 순서대로 가져와서 this is the turn of (item)을 콘솔창에 출력하라는 의미, 이때 =>는 화살표 함수라고 함(arrow function)
  toDos = parsedToDos; //localStorage에 저장되어 있던 값들을 위의 코드에서 array에 저장후 다시 toDos array에 할당하는 코드
  parsedToDos.forEach(paintTodo); //parsedToDos array의 각 요소에 대해서 paintToDo 함수를 실행시킨다.
}

//filter 함수는 새로운 array를 return함
// const arr = [1,2,3,4];
// arr.filter(item => item > 2);//이 코드에서 filter 함수는 array의 각각의 요소에 대해서 item > 2를 수행하는데 1 > 2에 대해서는 false를 filter 함수에 반환하고 false를 받은 filter 함수는 새로운 배열을 만들 때 false에 해당하는 요소는 새로운 array에 추가하지 않는다.
