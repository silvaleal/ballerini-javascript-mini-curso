var tarefas = []

function adicionarTarefa() {
    var error = document.getElementById('error')
    var input = document.getElementById("input")
    var tarefa = input.value.trim()


    if (tarefa == "") {
        error.textContent = "Nenhum item foi escrito!"
        return
    }

    tarefas.push(tarefa)
    loadTarefas();
    tarefa.value = ""
    error.textContent = ""
}

function loadTarefas() {
    var listaTarefas = document.getElementById('items')
    listaTarefas.innerHTML = ""

    for (let i = 0; i < tarefas.length; i++) {
        let tarefaAtual = document.createElement("li")
        tarefaAtual.textContent = tarefas[i]
        listaTarefas.appendChild(tarefaAtual)
        
    } 
}