import {ADD_TO_CART} from './action-types/cart-actions'
//this is the same as what I have done previuosly with 'action creators'

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id }
    }