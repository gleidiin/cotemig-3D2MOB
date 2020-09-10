const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORTA = 8080;

const items = [
    {id: 1, name: "item estragado", ativo: true},
    {id: 2, name: "item top 2", ativo: true}, 
    {id: 3, name: "item top 3", ativo: true},
    {id: 4, name: "item top 4", ativo: true}
];

app.use(bodyParser.json());

app.get("/item", (requisicao, resposta) => {
    const { q } = requisicao.query;
    resposta.send(items.filter(item => item.name.includes(q)));
});

// exemplos
// coringa -> localhost:/item/1
// path parametro -> id = 1 
// meet.google.com/jvq-yddd-yvw
// meet.google.com/:sala

app.get("/item/:id", (req, res) => {
    const id = req.params.id;

    // busca item do array por id
    const item = items.find(pam => pam.id == id);
    
    if(item) 
        res.send(item);
    else 
        res.sendStatus(404);
})

// inicializa servidor http na porta PORTA
app.listen(8080, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
