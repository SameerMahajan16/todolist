// Initialize an array to store tasks
let tasks = [];

// Add an event listener to add tasks to the add task btn
document.getElementById("addTaskBtn").addEventListener("click", function () {
  // Storing text value from input box as a variable 'taskInput'
  let taskInput = document.getElementById("taskInput").value;

  // Check if the input is not empty (truthy value)
  if (taskInput) {
    // Add the task to the tasks array
    tasks.push(taskInput);

    // Clear the input field after adding the task
    document.getElementById("taskInput").value = "";

    // Call function to update the task list display
    displayTasks();
  }
});

// Function to display the tasks from tasks array in the UL
function displayTasks() {
  // Select the unordered list (taskList) in the HTML
  let taskList = document.getElementById("taskList");

  // Clear the existing task list before updating it
  taskList.innerHTML = "";

  // Loop through each task in the array and create a list item
  tasks.forEach((task, index) => {
    // Create a new <li> element for each task
    let li = document.createElement("li");

    // Add Bootstrap classes for styling
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    // Set the inner HTML of the <li> element with task text and a remove item
    li.innerHTML = `${task} <button class = 'btn btn-dark btn-sm' onclick='removeTask(${index})'>√</button>`;

    // Append the new task to the task list
    taskList.appendChild(li);
  });
}

// Function to remove a task from the list when the "√" button is clicked
function removeTask(index) {
  // Remove the task at the given index from the array
  tasks.splice(index, 1);

  // Call the function to update the task list display
  displayTasks();
}

// Event listener for the "Clear All Tasks" button
document.getElementById("clearTaskBtn").addEventListener("click", function () {
  // Empty the tasks array to remove all tasks
  tasks = [];

  // Call the function to update the task list display
  displayTasks();
});