import Axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    ADD_TO_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    ON_SUCCESS_BUY
}
    from './types';

export function loginUser(dataToSubmit) {
    const request = Axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request

    }
}

export function registerUser(dataToSubmit) {
    const request = Axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request

    }
}

export function auth() {
    const request = Axios.get('/api/users/auth')
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request

    }
}


export function addToCart(_id) {


    const request = Axios.get(`/api/users/addToCart?photoId=${_id}`)
        .then(response => response.data);

    return {
        type: ADD_TO_CART,
        payload: request
    }
}

export function getCartItems(cartItems, userCart) {
    const request = Axios.get(`/api/photos/photo_by_id?id=${cartItems}&type=array`)
        .then(response => {
            //console.log(response)
            userCart.forEach(cartItem => {
                //console.log(cartItem)
                response.data.forEach((photoDetail, index) => {
                    //console.log(photoDetail)
                    if (cartItem.id === photoDetail._id) {
                        response.data[index].quantity = cartItem.quantity
                        console.log(cartItem.quantity)
                    }
                    // console.log(cartItem.id)
                    // console.log(photoDetail._id)
                })
            })


            return response.data;
        });

    return {
        type: GET_CART_ITEMS,
        payload: request

    }
}


export function removeCartItem(photoId) {
    const request = Axios.get(`/api/users/removeFromCart?id=${photoId}`)
        .then(response => {

            response.data.cart.forEach(item => {
                response.data.photoInfo.forEach((photo, index) => {
                    if (item.id === photo._id) {
                        response.data.photoInfo[index].quantity = item.quantity
                    }
                })
            })

            return response.data;
        });

    return {
        type: REMOVE_CART_ITEM,
        payload: request

    }
}


export function onSuccessBuy(data) {

    const request = Axios.post(`/api/users/successBuy`, data)
        .then(response => response.data);

    return {
        type: ON_SUCCESS_BUY,
        payload: request
    }
}