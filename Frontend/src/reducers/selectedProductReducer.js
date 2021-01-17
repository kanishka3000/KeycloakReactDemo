import {FETCH_PRODUCT} from '../actions/types';
const selectedProductReducer = (state = {}, action)=>{

    switch(action.type){
        case FETCH_PRODUCT:{
            return action.payload;
        }
    }
    return state;
}

export default selectedProductReducer;