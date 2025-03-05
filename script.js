// Initialize an array to store tasks
let tasks = [];

// Add an event listener to add tasks when clicking the button
document.getElementById("addTaskBtn").addEventListener("click", function () {
  let taskInput = document.getElementById("taskInput").value;
  if (taskInput) {
    tasks.push({ text: taskInput, completed: false });
    document.getElementById("taskInput").value = "";
    displayTasks();
  }
});

// Function to display tasks and update the counter
function displayTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear the list

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    li.innerHTML = `
      <span onclick="toggleCompletion(${index})" class="task-text ${task.completed ? 'completed' : ''}">
        ${task.text}
      </span>
      <button class="btn btn-dark btn-sm" onclick="removeTask(${index})">√</button>
    `;
    
    taskList.appendChild(li);
  });

  // Update task counter
  document.getElementById("taskCounter").textContent = `Total Tasks: ${tasks.length}`;
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Function to mark a task as completed
function toggleCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

// Event listener for the "Clear All Tasks" button
document.getElementById("clearTaskBtn").addEventListener("click", function () {
  tasks = [];
  displayTasks();
});

// Event listener for "Enter" key to add a task
document.getElementById("taskInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("addTaskBtn").click();
  }
});
