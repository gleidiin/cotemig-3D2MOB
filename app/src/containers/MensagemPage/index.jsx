import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button, Form, FormControl } from 'react-bootstrap';
import { pegaMensagens, adicionaMensagem } from '../../services/chat-service'
import BalaoMensagem from './BalaoMensagem';

import "./TelaMensagem.css";


class TelaMensagem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { id: props.match.params.id, mensagem: "", mensagens: [] };

        pegaMensagens(this.state.id).then(mensagens => {
            this.setState({...this.state, mensagens})
        });
    }

    manipuladorInput = (evento) => {
        const valor = evento.target.value;
        this.setState({ mensagem: valor });
    }

    enviarMensagem = (event) => {
        event.preventDefault();
        const { mensagem } = this.state;

        adicionaMensagem(this.state.id, { conteudo: mensagem })
            .then(mensagem => {
                this.setState({...this.state, mensagem: '', mensagens: [...this.state.mensagens, mensagem]});
            });
    }

    render() {
        return (<>
            
            <div className="container-mensagem">
                {
                    this.state.mensagens.map((mensagem, index) => 
                        <BalaoMensagem key={index}
                            tipo="start"
                            mensagem={mensagem.conteudo} />
                    )
                }
            </div>
                
            <Form onSubmit={ this.enviarMensagem }>
                <Form.Group>
                    <FormControl className="input-mensagem" name="formulario" value={ this.state.mensagem }
                        onChange={ this.manipuladorInput }>
                    </FormControl>
                </Form.Group>
            </Form>
            
            
        <Link className="btn btn-secondary float-left" to="/mensagem">Voltar</Link>
        <Button className="float-right" onClick={ this.enviarMensagem }>Enviar Mensagem</Button>
        </>)
    }
}

export default TelaMensagem