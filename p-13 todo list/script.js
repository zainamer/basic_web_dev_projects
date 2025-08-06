// Select elements
const inputBox = document.querySelector("input");
const addButton = document.querySelector("button");
const taskList = document.querySelector(".task-list");

// Add button click event
addButton.addEventListener("click", addTask);

// Also allow Enter key to add task
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Circle (for marking complete)
  const circle = document.createElement("span");
  circle.className = "circle";
  li.appendChild(circle);

  // Task text
  const taskPara = document.createElement("p");
  taskPara.textContent = taskText;
  li.appendChild(taskPara);

  // Delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "✖";
  li.appendChild(deleteBtn);

  // Add to task list
  taskList.appendChild(li);

  // Clear input
  inputBox.value = "";

  // Delete task
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Toggle complete
  circle.addEventListener("click", () => {
    circle.classList.toggle("checked");
    taskPara.classList.toggle("strike");
  });
}
