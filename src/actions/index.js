import axios from 'axios';
import usersApi from '../api/usersApi'
export const SHOW_USERS = 'SHOW_USERS';




export function showUsers(){
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response.data);
                dispatch( { type: SHOW_USERS, payload: response.data})

            })

}}



/// Essa aqui é a versão que eu gostaria de ter feito funcionar, trazendo diretamente do arquivo lá da API.



/*
this return (dispatch, getState) => {
    usersApi.getUsers()
        .then((response) => {
            dispatch( { type: SHOW_USERS, payload: response.data})
        })
*/
