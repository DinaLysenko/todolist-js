export function Button(title, callback){
    let container=document.createElement("button");
    container.append(title)
    container.addEventListener('click',()=> {
        callback()
    })
    return container
}