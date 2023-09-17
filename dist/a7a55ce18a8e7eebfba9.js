import { addTask, getTasks} from "../module/aggregator.js";
const tasks = getTasks();
function displayTasks() {
    const taskList = document.getElementById('taskList');
    const addedTaskList = document.getElementById('addedTaskList');

    // Limpiar las listas
    taskList.innerHTML = '';
    addedTaskList.innerHTML = '';

    // Mostrar las tareas en ambas listas
    const tasks = getTasks();
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.addEventListener('click', () => {
            removeTask(index);
        });

        listItem.appendChild(removeButton);

        taskList.appendChild(listItem);

        const addedListItem = document.createElement('li');
        addedListItem.textContent = task;
        addedTaskList.appendChild(addedListItem);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function onAddTaskClick() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        displayTasks();
        taskInput.value = '';
    }
}

// Bind the function to the button click
document.getElementById('task').addEventListener('click', onAddTaskClick);

// Inicializar la visualización de las tareas
displayTasks();