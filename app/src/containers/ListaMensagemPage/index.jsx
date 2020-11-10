import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pegarTodosChats } from '../../services/chat-service';
import Style from './lista-mensagem-page.css';

const ListaMensagemPage = () => {
    const [chats, setChats] = useState([]);

    useEffect(()=> {
        pegarTodosChats().then(data => {
            setChats(data);
        }); 
        return () => { console.log("component did unmount"); }
    }, []);


return (<div>
    <ul>
    { chats.map(chat => <li>
            <Link to={'mensagens/' + chat.id }>Ir para chat XPTO</Link>
        </li>)
    }
    </ul>
</div>)
}

export default ListaMensagemPage;