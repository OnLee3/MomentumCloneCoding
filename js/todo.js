const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"
// 새로고침시, 기존 localStorage에 저장된 값을 불러와서 값을 변경해야하므로 let으로 선언.
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    if(toDos.length >= 3){
        toDoForm.className="hidden";
    }
    else if(toDos.length < 3 ){
        toDoForm.classList.remove("hidden");
    }
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove()
   toDos = toDos.filter(item => item.id !== parseInt(li.id));
   saveToDos(); 
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("i");
    button.className = "fas fa-times";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    li.classList.add(FADEINANI__INIT);
    setTimeout(function () {
        li.classList.add(FADEINANI__FIN);
    }, 30)
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

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // 기존 저장된값으로 채워주지 않으면, 새로 값을 저장할때 기존 값들이 날라감.
    toDos = parsedToDos;
    parsedToDos.forEach((item) => paintToDo(item));
}

if(toDos.length < 3){
    toDoForm.addEventListener("submit", handleToDoSubmit);
}
else{
    toDoForm.className="hidden";
}