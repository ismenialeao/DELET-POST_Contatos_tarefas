const express = require("express")
const router = express.Router() //exporta rotas do Router
const controller = require("../controllers/toDoControllers") //guarda logia

router.get("/", controller.getAll)   // router e o verbo que vou fazer 
router.get("/:id", controller.getById) //vai pro controller

router.post("/cadastrar", controller.criarTarefa)
router.delete("/:id", controller.apagarTarefa)
module.exports = router


//quarto usar
