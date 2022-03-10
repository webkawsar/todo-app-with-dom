

// document.getElementById("addTask").addEventListener("click", (event) => {

//     event.preventDefault();
//     const newTaskInput = document.getElementById("new-task");
//     const items = document.getElementById("items");

//     // <li class="item">
//     //     <input type="checkbox" /><label>Task Name</label>
//     // </li>

//     const newInput = document.createElement('input');
//     newInput.setAttribute('type', 'checkbox');
//     const newLabel = document.createElement("label");
//     newLabel.innerText = newTaskInput.value;

//     const li = document.createElement("li");
//     li.setAttribute("class", "item");

//     li.appendChild(newInput);
//     li.appendChild(newLabel);
//     items.appendChild(li);
//     newTaskInput.value = '';
// })





// lws way thinking
const newTask = document.querySelector("#new-task");
const form = document.querySelector("form");
const todoUl = document.querySelector("#items");
const completeUl = document.querySelector(".complete-list ul");

//handle submit event
form.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();
    
    const listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = '';

    //bind checkbox item
    bindInCompleteItem(listItem);

}

function createTask(task) {

    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");

    label.innerText = task;
    checkbox.type = "checkbox";
    listItem.setAttribute("class", "item");
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}

function bindInCompleteItem(taskItem) {
    
    const checkbox = taskItem.querySelector("input[type='checkbox']");
    checkbox.addEventListener('click', completeTask);
}

function completeTask() {

    const listItem = this.parentNode;
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerText = "Delete";
    listItem.appendChild(deleteButton);

    const checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    completeUl.appendChild(listItem);

    //bind delete task
    bindCompleteItem(listItem);

}

function bindCompleteItem(taskItem) {
    
    const deleteButton = taskItem.querySelector(".delete");
    deleteButton.addEventListener('click', deleteTask);
}

function deleteTask(){
    
    const li = this.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
}

for(let i=0; i< todoUl.children.length; i++ ) {
    bindInCompleteItem(todoUl.children[i]);
}

for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteItem(completeUl.children[i]);
}






