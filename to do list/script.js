
// JavaScript functionality
const taskList = document.getElementById('taskList');
const taskSummary = document.getElementById('taskSummary');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return; // Avoid empty tasks

    createTaskElement(taskText);
    updateTaskSummary(taskText);

    taskInput.value = ''; // Clear input
}

function createTaskElement(taskText) {
    const listItem = document.createElement('li');

    // Task Text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Action Buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    // Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '&#10003;'; // Checkmark
    completeBtn.onclick = () => toggleComplete(listItem);

    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '&#9998;'; // Pencil icon
    editBtn.onclick = () => editTask(taskSpan);

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&#10006;'; // X icon
    deleteBtn.onclick = () => deleteTask(listItem, taskText);

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    listItem.appendChild(taskSpan);
    listItem.appendChild(actionsDiv);
    taskList.appendChild(listItem);
}

function updateTaskSummary(taskText) {
    const summaryItem = document.createElement('li');
    summaryItem.textContent = taskText;
    summaryItem.id = `summary-${taskText.replace(/\s+/g, '-')}`;
    taskSummary.appendChild(summaryItem);
}

function toggleComplete(listItem) {
    listItem.classList.toggle('completed');
}

function editTask(taskSpan) {
    const newTaskText = prompt('Edit your task:', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        updateSummaryText(taskSpan.textContent, newTaskText.trim());
        taskSpan.textContent = newTaskText.trim();
    }
}

function deleteTask(listItem, taskText) {
    listItem.remove();
    removeTaskFromSummary(taskText);
}

function updateSummaryText(oldText, newText) {
    const summaryItem = document.getElementById(`summary-${oldText.replace(/\s+/g, '-')}`);
    if (summaryItem) {
        summaryItem.textContent = newText;
        summaryItem.id = `summary-${newText.replace(/\s+/g, '-')}`;
    }
}

function removeTaskFromSummary(taskText) {
    const summaryItem = document.getElementById(`summary-${taskText.replace(/\s+/g, '-')}`);
    if (summaryItem) {
        summaryItem.remove();
    }
}
