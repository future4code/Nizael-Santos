function addTask() {
    const input = document.querySelector("input")
    
    const newTask = input.value
    
    if(newTask === ""){
        alert("Please, type something!")
    } else {
        const listaDeTarefas = document.querySelector("ol")

        listaDeTarefas.innerHTML += "<li>" + newTask + "</li>"
    
        input.value = ""
    }
}