const toDoFrom = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input")
const toDoInput = toDoFrom.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY  ="todos"

var toDos = []




function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));

}


function deleteToDo(event){
    const li = (event.target.parentNode);
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id= newTodo.id
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText=" ❌";
    deleteBtn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj ={
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoFrom.addEventListener("submit",handleToDoSubmit);




const savedToDos =localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}