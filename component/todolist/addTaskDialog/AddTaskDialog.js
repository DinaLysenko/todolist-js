import {Button} from "../tasks/button/Button.js";
import {addTak, addTaskDialogClose} from "../../../data/data.js";

export  function AddTaskDialog(isOpen){
    let container=document.createElement('dialog')
    container.open=isOpen
    let input=document.createElement('input')
    let buttonAdd=Button('add', ()=> {
        if(input.value.trim().length>0){
            addTak(input.value)
        } else {
            input.classList.add('error')
        }

    })
    let buttonCancel=Button('cancel', addTaskDialogClose)
    container.append(input, buttonAdd, buttonCancel)
    return container
}