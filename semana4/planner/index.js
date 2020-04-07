function addTask() {
    const input = document.querySelector("input")
    
    const newTask = input.value
    
    if(newTask === ""){
        alert("Please, type a task")
    } else {
        const listaDeTarefas = document.querySelector("ul")

        listaDeTarefas.innerHTML += "<li>" + newTask + "</li>"
    
        input.value = ""
    }
}