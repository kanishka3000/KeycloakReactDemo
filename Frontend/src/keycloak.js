import Keycloak from 'keycloak-js';

const keycloak = new Keycloak(
    {
        url: window.location.origin + '/auth',
        realm: 'DemoRealm',
        clientId: 'reactdemo'
    }
);

export default keycloak;