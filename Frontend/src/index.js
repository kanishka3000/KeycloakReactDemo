import { queryByTestId } from '@testing-library/react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

import App from './App';
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
    <Provider store = {createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
        <App/>
    </Provider>
    , 
    document.querySelector('#root'));