
export let tasks = [];

export function addTask(task) {
    tasks.push(task);
}

export function completeTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
    }
}

export function getTasks() {
    return tasks;
}


