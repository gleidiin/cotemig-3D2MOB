import React from 'react';

import { Button,
    ButtonGroup,
    Image} from 'react-bootstrap';

const ProfileContainer = (props) => {
    if(!props) props = {}
    return(<div>
        <div className="app-picture-container">
            <Image className="img-fluid d-block m-auto" 
            src={props.foto_url} />
            <p>{props.nome} <br /> { props.descricao} </p>
        </div>

        <ButtonGroup className="pt-2">
            <Button variant="secondary" onClick={ props.getNext }>Próximo</Button>
            <Button variant="primary"
                onClick={() => props.abrirChat(1) } >
                    Amei
            </Button>
        </ButtonGroup>
    </div>);
}

export default ProfileContainer;