import React from 'react';
import { Link } from 'react-router-dom'; 
import { Form, FormControl, Button, Alert } from 'react-bootstrap';
import { criarUsuario } from '../../services/auth-service';

class SignupPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {},
            msgError: ''
        }
    }

    inputHandler = ({ target }) => {
        const form = {...this.state.form, [target.name]: target.value};
        this.setState({...this.state, form: form })
    }

    doCriarConta = (event) => {
        event.preventDefault();
        criarUsuario(this.state.form).then(() => {
            this.props.history.push("/");
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (<div>
            <h2 className="app-title">Criar conta</h2>
            <Form className="app-login-form" onSubmit={this.doCriarConta}>
                { this.state.msgError ? <Alert variant={'dark'} >{this.state.msgError}</Alert> : ''}
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <FormControl onChange={this.inputHandler} type="text" name="nome" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <FormControl onChange={this.inputHandler} type="email" name="email" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <FormControl onChange={this.inputHandler} type="password" name="senha" required />
                </Form.Group>
                <Form.Group>
                    <Button block={true} type="submit">Criar conta agora</Button>
                    <Link className="float-right" to="/login">Eu já tenho uma conta</Link>
                </Form.Group>
            </Form>
        </div>);
    }
}

export default SignupPage;
