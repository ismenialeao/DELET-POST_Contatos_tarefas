
const express = require("express")
const router = express.Router()
const controller = require("../controllers/conToControllers")

router.get("/", controller.getById)
router.get("/:id", controller.getById)

router.post("/cadastrar", controller.criarContato)
router.delete("/:id", controller.apagarContato)



module.exports = router