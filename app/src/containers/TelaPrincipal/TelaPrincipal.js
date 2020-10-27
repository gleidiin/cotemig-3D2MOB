import React from 'react';
import './TelaPrincipal.css';
import { me } from '../../services/auth-service';

import { Button,
         ButtonGroup,
         Image} from 'react-bootstrap';


function TelaPrincipal (props) {
    me().then().catch();

    return (<>
        <div className="container-foto">
            <Image className="img-fluid d-block m-auto" 
            src={props.foto_url} />
            <p>{ props.nome} <br /> { props.descricao} </p>
        </div>
        
        <ButtonGroup className="pt-2">
            <Button variant="secondary" onClick={ props.doNext }>Próximo</Button>
            <Button variant="primary"
                onClick={() => props.doAmei(1) } >
                    Amei
            </Button>
        </ButtonGroup>
    </>)
}


export default TelaPrincipal;
