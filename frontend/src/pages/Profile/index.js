import React, {useEffect, useState} from 'react';
import './styles.css';
import {Link, useHistory} from'react-router-dom';
import {FiPower} from'react-icons/fi';
import {FiTrash} from'react-icons/fi';
import logoImg from '../../assets/logo.svg';


import api from '../../services/api';
export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization : ongId
            }
        }).then(response => {
            console.log(response.data);
            setIncidents(response.data);
        })
    },[ongId] );

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization:ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id != id))
        }catch(err){
            alert("Errro ao deletar");
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return(
        
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="seja um herói"/>
                <span>Bem vindo {ongName}</span>
                <Link className="button" to="/incidents/new"> Cadastrar novo caso</Link>
                <button onClick={() => handleLogout()}><FiPower color="#e02041"></FiPower></button>                
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency:'BRL'}).format( incident.value)}</p>
                    <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                        <FiTrash size={20} color="#a8a8b3"/> 
                    </button>
                </li>
                ))}
                
            </ul>
        </div>
        
    );
}