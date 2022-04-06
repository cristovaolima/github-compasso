import { endpoints } from './Constants';

export default class User{

    _errorResponse(status=500, message){
        const msg = message ? message : 'Ocorreu um erro de comunicação com a API do Github.';
        return { error: true, httpStatus: status, message: msg };
    }

    async show(username){
        const url = endpoints.user.show + '/' + username;

        const payload = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`
            }
        }
        try{
            const response = await fetch(url);
            const responseJson = await response.json();
            var msg = 'Ocorreu um erro ao consultar o usuário.';
            if(response.status === 404)
                msg = 'Usuário não encontrado.'

            if(!response.ok){
                return this._errorResponse(
                    response.status, 
                    msg
                    );
            }
            return responseJson;
        }catch(error) {
            return this._errorResponse();
        }
    }

    async reposList(username){
        var url = endpoints.user.repos;
        url = url.replace('NOME_USUARIO', username);

        const payload = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`
            }
        }
        try{
            const response = await fetch(url);
            const responseJson = await response.json();

            if(!response.ok){
                return this._errorResponse(
                    response.status, 
                    'Ocorreu um erro ao consultar o usuário.'
                    );
            }
            return responseJson;
        }catch(error) {
            return this._errorResponse();
        }
    }

    async starredList(username){
        var url = endpoints.user.starred;
        url = url.replace('NOME_USUARIO', username);

        const payload = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`
            }
        }
        try{
            const response = await fetch(url);
            const responseJson = await response.json();
            console.log(response);

            if(!response.ok){
                return this._errorResponse(
                    response.status, 
                    'Ocorreu um erro ao consultar o usuário.'
                    );
            }
            return responseJson;
        }catch(error) {
            return this._errorResponse();
        }
    }
}