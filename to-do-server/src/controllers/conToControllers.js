

const contatoJson = require("../models/contatos.json")

const getAll = (request, response) =>{
    response.status(200).send(contatoJson)
}
const getById = (request, response) =>{

    const qualId = request.params.id
    const tarefaFilter = contatoJson.find(contato => contato.id == qualId)

    response.status(200).send(tarefaFilter)

}

const criarContato = (require, response) =>{
    const addRedes= request.body.redes
    const addtel = request.body.TelFixo

    const novoContato = {
        id : "3",
        nome : "Ismy",
        celular : "(77) 999221504",
       redes: addRedes,
       TelFixo: addtel,

    }
    contatoJson.push(novoContato)
    response.status(200).send(novoContato)

}
apagarContato = (request, response) =>{
    const idReq = request.params.id
    const contatoFiltrado = contatoJson.find(contato => contato.id == idReq)
    
    const indice = contatoJson.indexOf(contatoFiltrado)
    console.log(indice)
    
    contatoJson.splice(indice, 1)
    response.status(200).send({
        "mensagem": "Contato deletado com sucesso"
    }, contatoJson
    )
    

}

module.exports = { getAll, getById, criarContato, apagarContato}
