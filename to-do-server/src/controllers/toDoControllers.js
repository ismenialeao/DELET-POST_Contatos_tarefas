

const tarefasJson = require("../models/tarefas.json");

const getAll = (request, response) => {
    response.status(200).send(tarefasJson)
}

const getById = (request, response) => {
    const idRequirido = request.params.id // no id é via parametros
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    response.status(200).send(tarefaFiltrada)
}

const criarTarefa = (request, response) =>{
      //pegar tarefa enviada pelo cliente

    const descricaoRequerida = request.body.descricao
    const autorRequerido = request.body.autor  //nova requisisão é via body 

    const novaTarefa = {   //juntar que foi envidado ao automaticos id data ...
        id: "1234",
        data: new Date(),
        concluido: false,
        descricao: descricaoRequerida,
        autor: autorRequerido

    }
    tarefasJson.push(novaTarefa)//empurrando nova tarefa criada

    response.status(200).send(novaTarefa) // enviar reposta

}

const apagarTarefa = (request, response) =>{
    const idRequirido = request.params.id //pegar id pelo parametro
    const tarefaFiltrada = tarefasJson.find( tarefa => tarefa.id == idRequirido)

    const indice = tarefasJson.indexOf(tarefaFiltrada) // indexOf busca indice da tarefaFiltrada
    console.log(indice)

tarefasJson.splice(indice, 1)//spalice(qual indice, quatos itens removidos, que vou add)
response.status(200).send(
    {"mensagem": "Tarefa deletada com sucesso" },
    tarefasJson
    
)

}


module.exports = {
    getAll,
    getById,
    criarTarefa,
    apagarTarefa

}

//quinto usar