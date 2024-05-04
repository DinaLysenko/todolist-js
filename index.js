import {Todolist} from "./component/todolist/Todolist.js";
import {data} from "./data/data.js";

let root=document.getElementById('root')
root.append(Todolist(data))