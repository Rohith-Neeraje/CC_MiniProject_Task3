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
  listItem.appendChild(taskText);

  // Add "complete" button
  const completeButton = document.createElement('button');
  const buttonText = document.createTextNode('Complete');
  completeButton.appendChild(buttonText);
  completeButton.addEventListener('click', completeTask);
  listItem.appendChild(completeButton);

  // Add "remove" button
  const removeButton = document.createElement('button');
  const removeText = document.createTextNode('Remove');
  removeButton.appendChild(removeText);
  removeButton.addEventListener('click', removeTask);
  listItem.appendChild(removeButton);

  // Add list item to the list
  taskList.appendChild(listItem);
}

// Function to complete task
function completeTask(event) {
  const listItem = event.target.parentElement;
  listItem.classList.toggle('completed');
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
