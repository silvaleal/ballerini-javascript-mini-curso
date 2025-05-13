function adicionarTarefa() {

    let tarefa = document.getElementById("input").value
    let items = document.getElementById('items')
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    novaTarefa.setAttribute("name", tarefa)

    items.appendChild(novaTarefa)
    document.getElementById("input").value = ""
}