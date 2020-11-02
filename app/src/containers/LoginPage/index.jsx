import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Button, Alert } from 'react-bootstrap';
import { login } from '../../services/auth-service';
class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: null, senha: null
            },
            isLoading: false,
            msgError: ''
        }
    }

    inputHandler = ({ target }) => {
        const form = {...this.state.form, [target.name]: target.value};
        this.setState({...this.state, form: form })
    }

    doLogin = (event) => {
        event.preventDefault();
        const { email, senha } = this.state.form;
        login(email, senha).then(()=> {
            this.props.history.push("/");
        }).catch(err => {
            this.setState({...this.state, msgError: 'Usuário ou senha incorretos.'})
        });
    }

    render() {
        return (<div>
            <h2 className="app-title">Faça seu login</h2>
            <Form className="app-login-form" onSubmit={this.doLogin}>
                { this.state.msgError ? <Alert variant={'dark'} >{this.state.msgError}</Alert> : ''}
                <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <FormControl onChange={this.inputHandler} type="email" name="email" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <FormControl onChange={this.inputHandler} type="password" name="senha" required />
                </Form.Group>
                <Form.Group>
                    <Button block={true} type="submit">Entrar</Button>
                    <Link className="float-right" to="/signup">Ou crie uma conta agora!</Link>
                </Form.Group>
            </Form>
            
        </div>)
    }

}

export default LoginPage;