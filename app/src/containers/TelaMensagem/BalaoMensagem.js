import React from 'react';
import { Row, Col } from 'react-bootstrap';


const BalaoMensagem = (props) => {
    const rowClass = `justify-content-${props.tipo}` 
    return (
    <Row className={rowClass} >
        <Col md={4}>
            <div className="balao-mensagem">
                <p>{ props.mensagem }</p>
            </div>
        </Col>
    </Row>)
}


export default BalaoMensagem;