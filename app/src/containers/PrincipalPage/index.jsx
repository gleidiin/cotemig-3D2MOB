import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import './TelaPrincipal.css';
import { deslogar } from '../../services/auth-service';
import { pegarTodosProfiles } from '../../services/profile-service';

import ProfileContainer from './ProfileContainer';

const INTIAL_STATE = {
    profile: {},
    profiles: [] 
}

const TelaPrincipal = () => {

    const [state, setState] = useState(INTIAL_STATE);
    const history = useHistory();
    
    useEffect(() => {
        pegarTodosProfiles().then(profiles => {
            let profile = profiles.length ? profiles[0] : {};
            setState({profile, profiles});
        });
    }, []);       

    const doDeslogar = () => {
        deslogar();
        history.push("/login");
    }

    const getNext = () => {
        let nextIndex = state.profiles.findIndex(p => p.id == state.profile.id);
        if(nextIndex == state.profiles.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex++;
        }
        const profile = state.profiles[nextIndex];
        setState({...state, profile});
    }

    return (<div className="user-header">
            <h2 class="app-title">Descubra</h2>
            <ProfileContainer { ...state.profile } onNext={ getNext } />
        </div>)
    
}


export default TelaPrincipal;
