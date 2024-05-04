import {Task} from "./task/Task.js";

export function Tasks(tasks){
    let container=document.createElement('ol')
    for (let i = 0; i < tasks.length; i++) {
        container.append(Task(tasks[i]))
    }
   return container
}