import {GET_NUMBERS_BASKET} from '../actions/types';

export const getNumber = () => {
    return (dispatch) => {
        console.log("Getting all Basket Numbers")
        dispatch({
            type: GET_NUMBERS_BASKET
        })
    }
}