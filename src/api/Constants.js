export const BASE_URL = 'https://api.github.com';

export const endpoints = {
    user: {
        starred: `${BASE_URL}/users/NOME_USUARIO/starred`,
        repos: `${BASE_URL}/users/NOME_USUARIO/repos`,
        show: `${BASE_URL}/users`,
    }
}