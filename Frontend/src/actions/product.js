import {FETCH_PRODUCTS, FETCH_PRODUCT} from './types';
import api from '../service/api';

export const fetchProducts  = () => async (dispatch) =>{

    let result = await api.get('/product');

    dispatch({
        type: FETCH_PRODUCTS,
        payload: result.data
    });
}

export const fetchProduct = (id) => async (dispatch) =>{

    let result = await api.get(`/product/${id}`);

    dispatch({
        type: FETCH_PRODUCT,
        payload: result.data
    });
}