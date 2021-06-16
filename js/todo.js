const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"
// 새로고침시, 기존 localStorage에 저장된 값을 불러와서 값을 변경해야하므로 let으로 선언.
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // 항목 3개이상이면 입력막고, 0개가 됬을때 다시 input 활성화 하는 역할.
    if(toDos.length >= 3){
        toDoForm.className=HIDDEN_CLASSNAME;
    }
    else if(toDos.length === 0 ){
        toDoForm.classList.remove(HIDDEN_CLASSNAME);
        toDoForm.addEventListener("submit", handleToDoSubmit);
    }
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove()
    // toDos Array 안의 각 인자를 item에 대입하여, li.id 와 같지 않을 경우에만 true를 return 하게 된다.
    // 즉 선택한 값만 비워둔채로 새로운 Array를 저장한다.
   toDos = toDos.filter(item => item.id !== parseInt(li.id));
   saveToDos(); 
}

function liFadeIn(event){
    event.target.childNodes[1].classList.remove(FADEOUTANI__INIT);
    event.target.childNodes[1].classList.remove(FADEOUTANI__FIN);
   event.target.childNodes[1].classList.add(FADEINANI__FIN);
}
function liFadeOut(event){
   event.target.childNodes[1].classList.remove(FADEINANI__FIN);
   event.target.childNodes[1].classList.add(FADEOUTANI__INIT);
   setTimeout(function () {
   event.target.childNodes[1].classList.add(FADEOUTANI__FIN);
    }, 30)
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("i");
    button.className = "fas fa-times";
    button.addEventListener("click", deleteToDo);
    button.classList.add(FADEINANI__INIT);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    li.classList.add(FADEINANI__INIT);
    setTimeout(function () {
        li.classList.add(FADEINANI__FIN);
    }, 30)
    li.addEventListener("mouseenter", liFadeIn);
    li.addEventListener("mouseleave", liFadeOut);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id : Date.now(),
        text : newToDo
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

// 새로고침시, 기존 데이터가 있으면 불러오는 역할.
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // 기존 저장된값으로 채워주지 않으면, 새로 값을 저장할때 기존 값들이 날라감.
    toDos = parsedToDos;
    parsedToDos.forEach((item) => paintToDo(item));
}

// 새로고침시, 항목3개 이상이면 input 활성화 막는 역할.
if(toDos.length < 3){
    toDoForm.addEventListener("submit", handleToDoSubmit);
}
else{
    toDoForm.className=HIDDEN_CLASSNAME;
}