const button = document.querySelector("#addBtn");
const input = document.querySelector("#taskInput");
const taskList = document.getElementById("taskList");
const contadorDeTarefas = document.querySelector("#taskCount");

let lista = []; // cada item: { texto, concluida }

// Atualiza o texto do contador
function atualizarContador() {
  contadorDeTarefas.textContent = `${lista.length} tarefas`;
}

// Cria o <li> na tela a partir de um item da lista
function criarLiNaTela(item) {
  const li = document.createElement("li");
  li.innerHTML = `
    <input class="checkbox" type="checkbox" ${item.concluida ? "checked" : ""}>
    <span class="task-text">${item.texto}</span>
    <button class="delete-btn">×</button>`;

  if (item.concluida) li.classList.add("completed");

  taskList.appendChild(li);

  // marcar/desmarcar concluída
  const checkbox = li.querySelector(".checkbox");
  checkbox.addEventListener("change", () => {
    item.concluida = checkbox.checked;
    li.classList.toggle("completed");
  });

  // deletar essa tarefa
  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    const indice = lista.indexOf(item);
    lista.splice(indice, 1);
    li.remove();
    atualizarContador();
  });
}

// Botão adicionar
button.addEventListener("click", () => {
  const tarefa = input.value;
console.log(lista)
  if (tarefa === "") {
    alert("Digite uma Tarefa Antes de Adicionar");
    return;
  }

  input.value = "";

  const item = { texto: tarefa, concluida: false };
  lista.push(item);
  criarLiNaTela(item);
  atualizarContador();
});

// Botão limpar concluídas (registrado UMA vez, fora do listener do addBtn)
const deletarConcluidas = document.querySelector("#clearBtn");
deletarConcluidas.addEventListener("click", () => {
  lista = lista.filter(item => !item.concluida);

  taskList.innerHTML = "";
  lista.forEach(item => criarLiNaTela(item));

  atualizarContador();
  console.log(lista)
});