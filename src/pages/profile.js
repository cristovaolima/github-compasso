import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { useParams } from 'react-router-dom';
import CardUser from '../components/carduser';
import TableRepos from '../components/tablerepos';
import { 
        Container,
        Row,
        Col,
        CardGroup,
        InputGroup, 
        Input, 
        Button,
        Spinner 
} from 'reactstrap';

import { ApiService } from '../api';

export default function Profile() {
    const username = useParams();
    const [user, setUser] = useState([]);
    const [repos, setRepos] = useState([]);
    const [reposStarred, setReposStarred] = useState([]);
    const [noRegisters, setNoRegisters] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = "Perfil | Github Compasso";
        if(username.username){
            loadUser();
            loadRepos();
            loadReposStarred();  
        }        
    }, []);

    async function loadUser(){
        setNoRegisters(false);
        setLoading(true);
        const responseJson = await ApiService.user.show(username.username);
        if(responseJson.error){
            setNoRegisters(true);
            setUser([]);
            setLoading(false);          
            return;
        }else{
            setUser(responseJson);
            setLoading(false);
            return;
        }
    }

    async function loadRepos(){
        setNoRegisters(false);
        setLoading(true);
        const responseJson = await ApiService.user.reposList(username.username); 
        if(responseJson.error){
            setNoRegisters(true);
            setRepos([]);
            setLoading(false);          
            return;
        }else{
            setRepos(responseJson);
            setLoading(false);
            return;
        }
    }

    async function loadReposStarred(){
        setNoRegisters(false);
        setLoading(true);
        const responseJson = await ApiService.user.starredList(username.username);
        // console.log(responseJson);  
        if(responseJson.error){
            setNoRegisters(true);
            setReposStarred([]);
            setLoading(false);          
            return;
        }else{
            setReposStarred(responseJson);
            setLoading(false);
            return;
        }
    }

    return (
        <div>
            <Header/>
            <br/>
            <Container>
                <h1>Perfil</h1>
                <h5>{user.name}</h5>
                <h6>{user.login}</h6>
                <h7>{user.bio}</h7>                
                <br/>
                <br/>
                <Row>
                  <Col className="bg-light border">
                    <h2>Repositórios</h2>
                    <TableRepos repos={repos}/>
                  </Col>
                  {' '}
                  <Col className="bg-light border">
                    <h2>Mais Visitados</h2>
                    <TableRepos repos={reposStarred}/>
                  </Col>
                </Row>
                <br/>
                <br/>
            </Container>
        </div>
    );
}