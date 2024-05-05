import {Todolist} from "./component/todolist/Todolist.js";
import {data, rerenderUI} from "./data/data.js";
rerenderUI(renderUI)
function renderUI(){
    let root=document.getElementById('root')
    root.innerHTML=''
    root.append(Todolist(data))
}
renderUI()
