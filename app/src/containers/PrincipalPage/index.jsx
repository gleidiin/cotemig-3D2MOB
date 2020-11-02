import React from 'react';
import './TelaPrincipal.css';
import { me, deslogar } from '../../services/auth-service';
import { pegarTodosProfiles, likeProfile } from '../../services/profile-service';

import ProfileContainer from './ProfileContainer';

class TelaPrincipal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: {},
            profiles: [] 
        }
    }

    componentDidMount() {
        me().then(usuario => {
            this.setState({...this.state, usuario});
        }).catch(err => {
            this.props.history.push("/login");
        });

        pegarTodosProfiles().then(profiles => {
            this.setState({...this.state, profiles})
        });
    }

    abrirChat = (id) => {
        likeProfile(id).then(chatInfo => {
            this.props.history.push(`/mensagens/${chatInfo.id}`);
        })
    } 

    doDeslogar = () => {
        deslogar();
        this.props.history.push("/login");
    }

    getNext = () => {

    }

    render() {
        return (<>
            <div className="user-header">
                <h2 class="app-title">Descubra</h2>
                <ProfileContainer />
                <p onClick={ this.doDeslogar }>Sair</p>
            </div>
            <hr />
            
        </>)
    }
}


export default TelaPrincipal;
