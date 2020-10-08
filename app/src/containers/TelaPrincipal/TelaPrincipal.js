import React from 'react';
import './TelaPrincipal.css';

import { Container,
         Row,
         Button,
         ButtonGroup,
         Image,
         Col } from 'react-bootstrap';


function TelaPrincipal (props) {
    return (
    <Container>
        <Row className="justify-content-md-center">
            <Col md={6}>
                <div className="container-foto">
                    <Image className="img-fluid d-block m-auto" 
                    src={props.foto_url} />
                    <p>{ props.nome} <br /> { props.descricao} </p>
                </div>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <ButtonGroup className="pt-2">
                <Button variant="secondary" onClick={ props.doNext }>Próximo</Button>
                <Button variant="primary"
                    onClick={() => props.doAmei(1) } >
                        Amei
                </Button>
            </ButtonGroup>
        </Row>
    </Container>)
}


export default TelaPrincipal;
