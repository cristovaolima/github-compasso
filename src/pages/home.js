import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import CardUser from '../components/carduser';
import { 
        Container,
        InputGroup, 
        Input, 
        Button,
        Spinner 
} from 'reactstrap';

import { ApiService } from '../api';

export default function Home() {
    const [name, setName] = useState('');
    const [user, setUser] = useState([]);
    const [noRegisters, setNoRegisters] = useState(false);
    const [loading, setLoading] = useState(false);

    async function seach(){
        setNoRegisters(false);
        setLoading(true);
        const responseJson = await ApiService.user.show(name);
        console.log(responseJson);  
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

    return (
        <div>
            <Header/>
            <br/>
            <Container>
                <InputGroup>                    
                    <Input
                        value={name} 
                        placeholder="Nome de usuário do Github"
                        onChange={e => setName(e.target.value)}
                    />
                    <Button 
                        color="primary" 
                        onClick={seach}
                        disabled={loading ? true : false}>
                        {loading ? <Spinner size="sm"></Spinner> : "Pesquisar"}
                    </Button>
                </InputGroup>
                <br/>
                {name !== '' && user.length != 0 && !loading ? <CardUser user={user}/> : null}
                {noRegisters ? <b>Usuário não encontrado.</b> : null}
                <br/>
                <br/>                
            </Container>
        </div>
    );
}