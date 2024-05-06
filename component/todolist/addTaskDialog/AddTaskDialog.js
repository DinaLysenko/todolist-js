import {Button} from "../tasks/button/Button.js";
import {addTask, addTaskDialogClose, data} from "../../../data/data.js";

export function AddTaskDialog(isOpen) {
    let container = document.createElement('dialog')
    container.open = isOpen
    let input = document.createElement('input')

    let buttonAdd = Button('add', () => {
        addTask(input.value)
    })
    let buttonCancel = Button('cancel', addTaskDialogClose)
    if (data.addTaskDialogIsOpen.error) {
        input.classList.add('error')
        let errorSpan = document.createElement('span')
        errorSpan.append(data.addTaskDialogIsOpen.error)
        container.append(errorSpan)
    }
    container.append(input, buttonAdd, buttonCancel)
    return container
}