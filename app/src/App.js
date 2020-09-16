import React from 'react';
import './App.css';

const style = {
  "perfilContainer": {
    "display": "inline-block",
    "width": "20%",
    "padding": "20px 10px"
  },
  "perfilImagem": {
    "display": "block",
    "margin": "0 auto",
    "width": "100px"
  },
  "perfilTexto": { "textAlign": "center" }
}

const ampliaNome = (nome) => {
  alert(nome);
}

const alunos = [
  {"nome": "Juan", "sobrenome": "Pereira", "imagem": "https://via.placeholder.com/300"},
  {"nome": "Vinicius", "sobrenome": "Moreira", "imagem": "https://via.placeholder.com/300"},
  {
    "nome": "Rafael", "sobrenome": "Batista", "imagem": "https://via.placeholder.com/300"
  }
];


const Perfil = (props) => (
  <div className="containerAzul" stsyle={style.perfilContainer}>
    <img onClick={ () => ampliaNome(props.nome) }
      style={style.perfilImagem}
      src={props.imagem}></img>
    <p style={ style.perfilTexto }>
      { props.nome } - { props.sobrenome }
    </p>
  </div>
);


function App() {
  return (
    <div className="App">
      {
        alunos.map(aluno => 
           (<Perfil {...aluno} />) 
        )
      }
    </div>
  );
}

export default App;
