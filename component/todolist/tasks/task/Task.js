import {Button} from "../button/Button.js";
import {deleteTask} from "../../../../data/data.js";

export function Task(task){
    let container=document.createElement('li')
    let button=(Button("❌", ()=> {
        deleteTask(task.id)
    }))
    container.append(task.title)
    container.append(button)
    return container
}