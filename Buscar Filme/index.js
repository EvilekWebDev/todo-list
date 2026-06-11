const button = document.querySelector("#addBtn");
const input = document.querySelector("#taskInput");
let lista = [];
button.addEventListener("click", () => {
  let tarefa = input.value;

  if (input.value === "") {
    alert("Digite uma Tarefa Antes de Adicionar");
  } else {
    input.value = "";
    const li = document.createElement("li");
    li.innerHTML = `
      <input class="checkbox" type="checkbox" checked?>
      <span class="task-text">${tarefa}</span>
      <button class="delete-btn">×</button>`;
    document.getElementById("taskList").appendChild(li);
  }

  lista.push(`${tarefa}`);
  console.log(lista);
  const deleteBtn = document.querySelector(".delete-btn");
  deleteBtn.addEventListener('click', () => {
    
  })

  const checkbox = document.querySelector(".checkbox");
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      const completo = document.querySelector("ul#taskList li");
      completo.classList.add("completed");
    } else {
      const completo = document.querySelector("ul#taskList li");
      completo.classList.remove("completed");
    }
  });
});
