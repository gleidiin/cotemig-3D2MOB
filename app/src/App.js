import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './containers/LoginPage';
import TelaPrincipal from './containers/TelaPrincipal/TelaPrincipal';
import TelaMensagem  from './containers/TelaMensagem/TelaMensagem';

const App = (props) =>{
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={TelaPrincipal} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/mensagem/:id" component={TelaMensagem} />
                            <Route path="*">
                                404 - Rota não encontrada :'(
                            </Route>
                        </Switch>
                    </Router>
                </Col>
            </Row>
        </Container>)
}

export default App;
