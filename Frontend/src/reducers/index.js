import {combineReducers} from 'redux'
import allProductsReducer from './allProductsReducer';
import selectedProductReducer from './selectedProductReducer';

export default combineReducers({
    allProducts: allProductsReducer,
    selectedProduct: selectedProductReducer
}
)