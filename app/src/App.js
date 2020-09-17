import React from 'react';
import axios from 'axios';

import './App.css';

const style = {
  perfilContainer: {
    "display": "inline-block",
    "width": "20%"
  },
  perfilImagem: {
    "margin": "0 auto",
    "width": "100%"
  },
  "perfilTexto": { "textAlign": "center" }
}


const Perfil = (props) => (
  <div style={style.perfilContainer}>
    <img style={style.perfilImagem}
      src={props.imagem}></img>
    <p style={ style.perfilTexto }>
      { props.nome }
    </p>
    <button onClick={ () => props.clone(props.index) }>Clone</button>
    <button onClick={ () => props.alteraNome(props.index) }>Adiciona Cotemig</button>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      alunos: []
    };
  
    this.atualizaDados();
  }

  atualizaDados = async () => {
    const res = await axios.get("http://localhost:8081/alunos") 
    if(res.data) {
      this.setState({ alunos: res.data });
    }
  }

  adicionaCotemig = async (index) => {
    const aluno = this.state.alunos[index];
    aluno.nome += " - cotemig"; 
    await axios.put(`http://localhost:8081/alunos/${index}`, aluno);
    this.atualizaDados()
  }

  clone = async (index) => {
    const aluno = this.state.alunos[index];
    await axios.post("http://localhost:8081/alunos", aluno);
    this.atualizaDados()
  }

  render() {
    return (
      <div className="App">
      {
        
        this.state.alunos.map((aluno, index) => 
           (<Perfil key={index} index={index} 
            alteraNome={ this.adicionaCotemig }
            clone={ this.clone } {...aluno} />) 
        )
      }
    </div>
    )
  }
}

export default App;
