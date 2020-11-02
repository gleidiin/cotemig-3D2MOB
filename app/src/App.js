import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container, Row, Col } from 'react-bootstrap';

import { isLogged } from './services/auth-service';

import LoginPage     from './containers/LoginPage';
import TelaPrincipal from './containers/PrincipalPage';
import TelaMensagem  from './containers/MensagemPage';
import SignupPage    from './containers/SignupPage';


const PrivateRoute = (props) => {
    return isLogged() ? <Route {...props} /> : <Redirect to="/login" />
}

const App = () =>{
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={5}>
                    <div className="app-container">
                        <Router>
                            <Switch>
                                <PrivateRoute exact path="/" component={ TelaPrincipal } />
                                <Route path="/login" component={ LoginPage } />
                                <Route path="/signup" component={ SignupPage } />
                                <PrivateRoute path="/mensagem/:id" component={ TelaMensagem } />
                                <Route path="*">
                                    Página não encontrada :'(
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </Col>
            </Row>
        </Container>)
}

export default App;
