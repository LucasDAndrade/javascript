function adicionarTarefa() {
  const inputTarefa = document.getElementById('tarefaInput');
  const textoTarefa = inputTarefa.value.trim();

  if (textoTarefa !== '') {
    const listaTarefas = document.getElementById('listaTarefas');
    
    // Criar um novo item da lista
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = textoTarefa;

    // Adicionar um botão para marcar como concluído
    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.addEventListener('click', function() {
      novaTarefa.classList.toggle('concluido');
    });

    // Adicionar um botão para remover
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.addEventListener('click', function() {
      listaTarefas.removeChild(novaTarefa);
    });

    // Adicionar os botões à tarefa
    novaTarefa.appendChild(botaoConcluir);
    novaTarefa.appendChild(botaoRemover);

    // Adicionar a nova tarefa à lista
    listaTarefas.appendChild(novaTarefa);

    // Limpar o campo de input
    inputTarefa.value = '';
  }
}
