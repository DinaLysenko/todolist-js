import {Header} from "./header/Header.js";
import {Tasks} from "./tasks/Tasks.js";

export function Todolist(data){
let container=document.createElement('div')
    container.append(Header(data.title))
    container.append(Tasks(data.tasks))
    return container
}