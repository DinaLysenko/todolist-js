export const data = {
    title: 'Todolist',
    tasks: [
        {
            id: crypto.randomUUID(),
            title: 'HTML',
            editTask: false,
        },
        {
            id: crypto.randomUUID(),
            title: 'CSS',
            editTask: false,
        },
        {
            id: crypto.randomUUID(),
            title: 'JS',
            editTask: false,
        }
    ],
    addTaskDialogIsOpen: {
        isOpen: false,
        error: null
    }
}

function setError(error) {
    data.addTaskDialogIsOpen.error = error
    subscriber()
}

export function unSetError() {
    data.addTaskDialogIsOpen.error = null
    subscriber()
}

function addTaskDialogOpen() {
    unSetError()
    data.addTaskDialogIsOpen.isOpen = true
    subscriber()
}

export function addTaskDialogClose() {
    data.addTaskDialogIsOpen.isOpen = false
    subscriber()
}

export function dialogOpen() {
    addTaskDialogOpen()
}

export function addTask(title) {
    unSetError()
    if (title.trim().length > 0) {
        let newTask = {
            id: crypto.randomUUID(),
            title: title,
        }
        data.tasks = [...data.tasks, newTask]
    } else {
        setError('ERROR!')
    }
    subscriber()
}

export function deleteTask(idTask) {
    data.tasks = data.tasks.filter(t => t.id !== idTask)
    subscriber()
}

export function inputToEditTaskActive(taskId) {
    data.tasks.map(t => t.id === taskId ? t.editTask = true : '')
    subscriber()
}
export function inputToEditTaskUnActive(taskId) {
    data.tasks.map(t => t.id === taskId ? t.editTask = false : '')
    subscriber()
}

function subscriber() {
}

export function rerenderUI(callback) {
    subscriber = callback
}