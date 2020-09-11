import {INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT} from './types';

export const productQuantity = (action, name) => {
    return (dispatch) => {
        console.log('inside product qunatity');
        console.log('action:', action)
        console.log('name:', name)
       dispatch({
           type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
           payload: name
       })
    }
} 

export const clearProduct = (name) => {
    return (dispatch) => {
        console.log('inside clear product');
        console.log('product', name)
        dispatch({
            type: CLEAR_PRODUCT,
            payload: name
        })
    }
}