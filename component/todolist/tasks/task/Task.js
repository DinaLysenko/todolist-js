import {Button} from "../button/Button.js";
import {deleteTask, inputToEditTaskActive, inputToEditTaskUnActive} from "../../../../data/data.js";

export function Task(task){
    debugger
    let container=document.createElement('li')
    let button=(Button("❌", ()=> {
        deleteTask(task.id)
    }))
    container.append(task.title)
    container.addEventListener('dblclick', ()=>{
        inputToEditTaskActive(task.id)
    })
    if(task.editTask){
        let input=document.createElement('input');
        input.value=task.title;
        container.innerHTML = ''; // Clear the container
        container.append(input);
        input.addEventListener('blur', () => { // Add blur event to save changes
            task.title = input.value;
            container.innerHTML = ''; // Clear the container
            container.append(task.title);
            container.append(button)
            inputToEditTaskUnActive(task.id)
        });
    }
    container.append(button)
    return container
}