
const todoInput = document.querySelector("#todo-form #todo")
const todoButton = todoInput.nextElementSibling;
const todoBoard = document.querySelector("#todo-board");
todoButton.addEventListener("click", addTodo);

function addTodo() {
    const text = todoInput.value;

    const li = document.createElement("ul");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "today";

    const textNode = document.createTextNode(text);
    const button = document.createElement("button");

    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(button);

    todoBoard.append(li);
    todoInput.value = "";
    button.innerHTML = "X";

    checkbox.addEventListener("click", todoCheck);
    button.addEventListener("click", todoDelete);
}

function todoCheck(e) {
    const li = e.target.parentNode;
    if (e.target.checked) 
    li.style.color = "lightgray";
    else 
    li.style.color = "black";
    
    const query = 'input[name="today"]:checked';
    const selectedElements = 
        document.querySelectorAll(query);
    
    const selectedElementsCnt =
        selectedElements.length;
    
    document.getElementById('result').innerText
    = selectedElementsCnt;
}

function todoDelete(e) {
    const li = e.target.parentNode;
    li.remove();
    
    const query = 'input[name="today"]:checked';
    const selectedElements = 
        document.querySelectorAll(query);
    
    const selectedElementsCnt =
        selectedElements.length;
    
    document.getElementById('result').innerText
    = selectedElementsCnt;
}

