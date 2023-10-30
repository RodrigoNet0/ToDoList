const button = document.querySelector(".add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-task")

let minhaListaDeItens = [];



function adicionarNovaTarefa(){
  minhaListaDeItens.push({
tarefa: input.value,
    concluida: false
  })

  input.value = "";

  mostrarTarefas()
}

function mostrarTarefas(){

    let novaLi = "";

    minhaListaDeItens.forEach((item, posicao) => {
novaLi = novaLi + `
<li class="task ${item.concluida && "done"}">
    <img src="https://th.bing.com/th/id/OIP.pzMXXgok2x4UhZxEFm-q3AHaEx?pid=ImgDet&rs=1" alt=" Imagem  de checked " onclick="concluirTarefa(${posicao})" />
    <p>${item.tarefa}</p>
    <img src="https://st4.depositphotos.com/23336614/25363/v/450/depositphotos_253639156-stock-illustration-black-white-vector-icon-bin.jpg" alt="Imagem de lixeira" onclick="deletarItem(${posicao})"  />
  </li>
`
    })

   listaCompleta.innerHTML = novaLi;

   localStorage.setItem("lista", JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao){
   minhaListaDeItens[posicao].concluida =  !minhaListaDeItens[posicao].concluida

   mostrarTarefas()
}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem("lista")

    if(tarefasLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasLocalStorage)
    }
   

    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener("click", adicionarNovaTarefa)