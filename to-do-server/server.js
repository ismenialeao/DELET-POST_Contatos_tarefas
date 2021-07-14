const app = require("./src/app");
const port = 3000   //mudou por port o 8080

app.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`);
});

//PRIMEIRO USAR