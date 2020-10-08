import React from 'react';
import TelaPrincipal from './containers/TelaPrincipal/TelaPrincipal';
import TelaMensagem  from './containers/TelaMensagem/TelaMensagem';

import 'bootstrap/dist/css/bootstrap.min.css';

import { pegarTodosProfiles } from './services/profile-service';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { amei: true, profiles: [], profile: {} };
    }

    componentDidMount() {
        pegarTodosProfiles()
            .then(profiles => {
                const profile = profiles[0] ? profiles[0] : {};
                this.setState({ profiles, profile });
            });
    }
    
    doAmei = () => {
        this.setState({ amei: !this.state.amei });
    }

    doNext = () => {

        const index = this.state.profiles.findIndex((prof) => prof.id == this.state.profile.id);

        let profile = {}
      
        if (this.state.profiles.length == index + 1) {
           profile = this.state.profiles[0]; 
        } else {
           profile = this.state.profiles[index + 1];
        }

        this.setState({...this.state, profile }); 
    }

    render() {
        const { profile } = this.state; 
        return (
            <div>
                <TelaPrincipal key={ profile.id } {...profile} doNext={this.doNext} doAmei={this.doAmei} />
            </div>
        )
    }
}

export default App;
