const taskInput = document.getElementById('taskInput');
const addTask= document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const errorMessage = document.getElementById('errorMessage');
const filterButtons = document.querySelectorAll(".filter-button");
const taskCount = document.getElementById("taskCount");
const clearCompletedButton =document.getElementById("clearCompletedButton");

let tasks=JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter="all";

addTask.addEventListener('click' , AddTask);

taskInput.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        AddTask();
    }
});

clearCompletedButton.addEventListener("click", function () {
    tasks = tasks.filter(function (task) {
        return task.completed === false;
    });

    saveTasks();
    renderTasks();
});

function AddTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        errorMessage.textContent = 'Please enter a task.';
        return;
    }

    errorMessage.textContent = "";

    const newTask={id: Date.now(), text: taskText, completed:false};

    tasks.push(newTask);

    saveTasks();
    renderTasks();

    taskInput.value = '';
    taskInput.focus();

}

function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks(){
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(function (task) {
    if (currentFilter === "active") {
        return task.completed === false;
    }

    if (currentFilter === "completed") {
        return task.completed === true;
    }

    return true;
    });


    filteredTasks.forEach(function (task) {
        const taskItem = document.createElement('li');
        taskItem.className= 'task-item';

        if(task.completed){
            taskItem.classList.add('completed');
        }

        const taskText = document.createElement('span');
        taskText.className= 'task-text';
        taskText.textContent = task.text;

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const completeButton = document.createElement("button");
        completeButton.classList.add("complete-button");
        completeButton.textContent = task.completed ? "Undo": "Complete";

        completeButton.addEventListener('click', function() {
            toggleTask(task.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";    

        deleteButton.addEventListener('click', function() {
            deleteTask(task.id);
        });

        taskActions.appendChild(completeButton);
        taskActions.appendChild(deleteButton);

        taskItem.appendChild(taskText);
        taskItem.appendChild(taskActions);

        taskList.appendChild(taskItem);

        updateTaskSummary();

    });
}

function toggleTask(taskId) {
    const selectedTask = tasks.find(function (task) {
        return task.id === taskId;
    });

    if (selectedTask) {
        selectedTask.completed = !selectedTask.completed;

        saveTasks();
        renderTasks();
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(function (task) {
        return task.id !== taskId;
    });

    saveTasks();
    renderTasks();
}

function updateTaskSummary() {
    const remainingTasks = tasks.filter(function (task) {
        return task.completed === false;
    });

    const remainingCount = remainingTasks.length;

    if (remainingCount === 1) {
        taskCount.textContent = "1 task left";
    } else {
        taskCount.textContent = `${remainingCount} tasks left`;
    }

    const hasCompletedTasks = tasks.some(function (task) {
        return task.completed === true;
    });

    clearCompletedButton.disabled = !hasCompletedTasks;
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

        renderTasks();
    });
});

renderTasks();
    