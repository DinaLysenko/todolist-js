export function Task(task){
    let container=document.createElement('li')
    container.append(task.title)
    return container
}