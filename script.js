const taskInput = document.getElementById('taskInput');
const addTask= document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const errorMessage = document.getElementById('errorMessage');

addTask.addEventListener('click' , AddTask);

taskInput.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        AddTask();
    }
});

function AddTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        errorMessage.textContent = 'Please enter a task.';
        return;
    }

    errorMessage.textContent = "";

    const taskItem =document.createElement("li");
    taskItem.classList.add("task-item");

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    taskItem.appendChild(taskTextElement);
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
    task.focus();
}
