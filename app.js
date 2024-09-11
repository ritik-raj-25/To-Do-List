function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Add the button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
