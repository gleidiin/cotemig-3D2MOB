const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const app        = express();

const PORTA = 8081;

let alunos = [
  {
    "id": 0,
    "nome": "Juan",
    "imagem": "https://via.placeholder.com/300"
  },
  {
    "id": 1,
    "nome": "Vinicius",
    "imagem": "https://via.placeholder.com/300"
  },
  {
    "id": 2,
    "nome": "Rafael",
    "imagem": "https://via.placeholder.com/300"
  }
];

app.use(bodyParser.json());
app.use(cors());

app.get("/alunos", (req, resposta) => {
    resposta.send(alunos);
});

app.post("/alunos", (req, res) => {
    const aluno = req.body;
    aluno.id = alunos.length;
    alunos.push(aluno);
    res.sendStatus(201);
});

app.put("/alunos/:id", (req, res) => {
    const { id } = req.params;
    const { nome, imagem } = req.body;
    alunos[id] = { id, nome, imagem };
    res.send(alunos[id]);
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
    
    if(item) {
        res.send(item);
    } else {
        res.sendStatus(404);
    }
});

// inicializa servidor http na porta PORTA
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
