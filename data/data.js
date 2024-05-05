export const data = {
    title: 'Todolist',
    tasks: [
        {
            id: crypto.randomUUID(),
            title: 'HTML',
        },
        {
            id: crypto.randomUUID(),
            title: 'CSS',
        },
        {
            id: crypto.randomUUID(),
            title: 'JS',
        }
    ],
    addTaskDialogIsOpen: false,
    error: false
}
function addTaskDialogOpen(){
    data.addTaskDialogIsOpen=true
    subscriber()
}
export function addTaskDialogClose(){
    data.addTaskDialogIsOpen=false
    subscriber()
}
export  function dialogOpen(){
    addTaskDialogOpen()
}
export function addTak(title){
    let newTask={
            id: crypto.randomUUID(),
            title: title,
        }
        data.tasks=[...data.tasks, newTask]
    subscriber()
}
export function deleteTask(idTask){
    data.tasks=data.tasks.filter(t=>t.id!==idTask)
    subscriber()
}
function subscriber(){}
export function rerenderUI(callback){
    subscriber=callback
}