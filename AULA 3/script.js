function adicionarTarefa() {
    let items = document.getElementById('items')
    let error = document.getElementById('error')

    let tarefa = document.getElementById("input").value
    let novaTarefa = document.createElement("li")


    if (tarefa == "") {
        error.textContent = "Nenhum item foi escrito!"
        return
    }

    error.textContent = ""

    novaTarefa.textContent = tarefa
    novaTarefa.setAttribute("name", tarefa)

    items.appendChild(novaTarefa)
    document.getElementById("input").value = ""
}