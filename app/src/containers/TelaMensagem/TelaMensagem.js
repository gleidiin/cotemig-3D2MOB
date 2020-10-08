import React from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import BalaoMensagem from './BalaoMensagem';

import "./TelaMensagem.css";


class TelaMensagem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { mensagem: "", mensagens: [] };
    }

    manipuladorInput = (evento) => {
        const valor = evento.target.value;
        this.setState({ mensagem: valor });
    }

    enviarMensagem = (event) => {
        const mensagens = this.state.mensagens;
        mensagens.push(this.state.mensagem);
        this.setState({ mensagem: '', mensagens: mensagens})
        event && event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="container-mensagem">
                            {
                                this.state.mensagens.map((mensagem, index) => 
                                    <BalaoMensagem key={index}
                                        tipo="start"
                                        mensagem={mensagem} />
                                )
                            }
                        </div>
                        
                        <Form onSubmit={ this.enviarMensagem }>
                            <Form.Group>
                                <input className="input-mensagem" name="formulario" value={ this.state.mensagem }
                                    onChange={ this.manipuladorInput }>
                                </input>
                            </Form.Group>
                        </Form>
                        
                        
                        <Button className="float-left" onClick={ () => this.props.doAmei() }>Voltar</Button>
                        <Button className="float-right" onClick={ this.enviarMensagem }>Enviar Mensagem</Button>
                    </Col>
                </Row>
                
            </Container> 
        )
    }
}

export default TelaMensagem