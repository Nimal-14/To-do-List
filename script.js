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
    taskTextElement.classList.add("task-text");
    taskTextElement.textContent = taskText;

    const taskActions=document.createElement("div");
    taskActions.classList.add("task-actions");

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.textContent = "Complete";

    const deleteButton =document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    completeButton.addEventListener('click',function(){
        taskItem.classList.toggle('completed');

        if(taskItem.classList.contains('completed')){
            completeButton.textContent = 'Undo';
        } else {
            completeButton.textContent = 'Complete';
        }
    });

    deleteButton.addEventListener('click',function(){
        taskItem.remove();
    })

    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(taskActions);

    taskList.appendChild(taskItem);
    
    taskInput.value = '';
    taskInput.focus();
}
