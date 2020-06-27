import Axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER, CET_CART_ITEMS } from './types';

export function loginUser(dataToSubmit){
    const request = Axios.post('/api/users/login', dataToSubmit)
        .then(response =>  response.data)
    
    return {
        type: LOGIN_USER,
        payload: request

    }
}

export function registerUser(dataToSubmit){
    const request = Axios.post('/api/users/register', dataToSubmit)
        .then(response =>  response.data)
    
    return {
        type: REGISTER_USER,
        payload: request

    }
}

export function auth(){
    const request = Axios.get('/api/users/auth')
        .then(response =>  response.data)
    
    return {
        type: AUTH_USER,
        payload: request

    }
}

export function getCartItems(cartItems, userCart){
    const request = Axios.get(`/api/photo/photos_by_id?id=${cartItems}&type=array`)
        .then(response =>{

            userCart.forEach(cartItem => {
                response.data.forEach((photoDetail, index) => {
                    if(cartItem.id === photoDetail.__id){
                        response.data.photo[index].quantity = cartItems.quantity
                    }
                })
            })
            

            return response.data;
               });
        
    return {
        type: CET_CART_ITEMS,
        payload: request

    }
}

