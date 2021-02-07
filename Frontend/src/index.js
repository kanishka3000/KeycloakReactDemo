import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { ReactKeycloakProvider } from '@react-keycloak/web' 
import keycloak from './keycloak'

import App from './App';
import reducers from './reducers'
import tokenStore from './util/tokenStore';
import tokenUpdater from  './util/tokenUpdater';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
    /*
    <ReactKeycloakProvider
        authClient = {keycloak} 
        initOptions = {{ onLoad: 'login-required', checkLoginIframe : false}} 
        onTokens = {tokenUpdater.bind(tokenStore)}
    >
    */
        <Provider store = {createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
            <App/>
        </Provider>
        /*
    </ReactKeycloakProvider>
    */
    , 
    document.querySelector('#root'));