import {Header} from "./header/Header.js";
import {Tasks} from "./tasks/Tasks.js";
import {AddTaskDialog} from "./addTaskDialog/AddTaskDialog.js";
import {Button} from "./tasks/button/Button.js";
import { dialogOpen} from "../../data/data.js";

export function Todolist(data){
let container=document.createElement('div')
    container.append(Header(data.title))
    container.append(Tasks(data.tasks))
    container.append(Button('+', dialogOpen))
    container.append(AddTaskDialog(data.addTaskDialogIsOpen))

    return container
}