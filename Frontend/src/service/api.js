import axios from 'axios';

let instance =  axios.create(
    {
        baseURL : window.location.origin + '/api'
    }
);

export default instance;