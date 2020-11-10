import React from 'react';
import { useHistory } from 'react-router-dom';
import { likeProfile } from '../../services/profile-service';

import { 
        Image,
        Row,
        Col
} from 'react-bootstrap';

const ProfileContainer = (props) => {

    const history = useHistory()

    const abrirChat = () => {
        likeProfile(props.id).then(chat => {
            history.push(`/mensagens/${chat.id}`);
        });
    } 

    return(<div>
        <div className="app-picture-container">
            <Image className="img-fluid d-block m-auto" 
            src={props.foto_url} />
            <p>{props.nome} <br /> { props.descricao} </p>
        </div>

        <Row className="justify-content-md-center pt-2">
            <Col md={3}>
                <Image className="img-fluid"
                       src="/assets/btn-close.png"></Image>
            </Col>
            <Col md={3}>
                <Image className="img-fluid" onClick={ props.onNext }
                       src="/assets/btn-update.png"></Image>
            </Col>
            <Col md={3}>
                <Image className="img-fluid"
                       src="/assets/btn-star.png"></Image>
            </Col>
            <Col md={3}>
                <Image className="img-fluid" onClick={ abrirChat }
                       src={ props.isLiked ?  '/assets/btn-liked.png' : '/assets/btn-like.png' } >        
                </Image>
            </Col>
        </Row>
    </div>);
}

export default ProfileContainer;