import {FETCH_PRODUCTS} from '../actions/types'

const allProductsReducer = (state = [], action)=>{
    switch (action.type){
        case FETCH_PRODUCTS:{
            return action.payload;
        }
    }
    return state;
}

export default allProductsReducer;