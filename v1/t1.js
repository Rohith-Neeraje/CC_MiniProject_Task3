// Initialize task array
let tasks = [];

// Get DOM elements
const form = document.querySelector('form');
const input = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

// Function to add task to the list
function addTask(task) {
  // Add task to array
  tasks.push(task);

  // Create new list item
  const listItem = document.createElement('li');
  const taskText = document.createTextNode(task);
  const spanElement = document.createElement('div');
  spanElement.appendChild(taskText);


  // Add "complete" button
  const completeButton = document.createElement('button');
  const buttonText = document.createTextNode('Complete');
  completeButton.appendChild(buttonText);
  completeButton.addEventListener('click', completeTask);
  completeButton.setAttribute("class","combutt");
  completeButton.style.marginRight="50px";
  completeButton.style.marginLeft="50px";
  spanElement.appendChild(completeButton);

  // Add "remove" button
  const removeButton = document.createElement('button');
  const removeText = document.createTextNode('Remove');
  removeButton.appendChild(removeText);
  removeButton.addEventListener('click', removeTask);
  removeButton.setAttribute("class","rembutt");
  removeButton.style.marginRight="50px";
  spanElement.appendChild(removeButton);

  spanElement.style.margin="20px";
  spanElement.style.padding="10px";
  spanElement.style.borderRadius="5px";
  // Add list item to the list
  listItem.appendChild(spanElement);
  taskList.appendChild(listItem);
}

// Function to complete task
function completeTask(event) {
  const spanEle = event.target.parentElement;
  const button = event.target;
  spanEle.style.backgroundColor = "#E6F8B2";
  button.style.backgroundColor = "#4B91F7";
  button.textContent = "Undo";
  button.removeEventListener('click',completeTask);
  button.addEventListener('click',undoTask);
}

function undoTask(event) {
  const spanEle = event.target.parentElement;
  const button = event.target;
  spanEle.style.backgroundColor = "transparent";
  button.style.backgroundColor = "#4CAF50";
  button.textContent = "Complete";
  button.removeEventListener('click',undoTask);
  button.addEventListener('click',completeTask);
}

// Function to remove task
function removeTask(event) {
  const listItem = event.target.parentElement;
  const taskIndex = tasks.indexOf(listItem.firstChild.textContent);
  tasks.splice(taskIndex, 1);
  listItem.remove();
}

// Add task when form is submitted
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = input.value;
  if (task !== '') {
    addTask(task);
    input.value = '';
  }
});
