document.addEventListener("DOMContentLoaded", ()=> {
  

const taskForm = document.getElementById('create-task-form');
const newtaskdescription = document.getElementById('new-task-description');
const taskul = document.getElementById('tasks');
const button = document.querySelector('form input[type="submit"]')

button.addEventListener('click',() => {
  addTask(newtaskdescription.value);
})

taskForm.addEventListener('submit', function(event){
  event.preventDefault();
})

function addTask(toDo){
  let li = document.createElement("li");
  li.textContent = `${toDo}`;

  let deleteButton = document.createElement("button");
  deleteButton.addEventListener('click', deleteTask);
  deleteButton.textContent = "X";
  li.appendChild(deleteButton);
  
  newtaskdescription.value = ""; // newtaskdescription.reset();
  taskul.appendChild(li);
}

function deleteTask(event){
  event.target.parentNode.remove()
}
})