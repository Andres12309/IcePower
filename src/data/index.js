import Cookies from 'js-cookie';
import Routes from '../constants/routes';
import EventEmitter from 'events';

// Crea una instancia del EventEmitter
const eventEmitter = new EventEmitter();

//ejecucion produccion
const baseURL = 'https://api.sriweb.cloudsolution.ec/v1';
//ejecucion local
//const baseURL = 'http://localhost:8083/sriweb-api/v1';
let headers = {
    Accept: 'application/json',
    mode: 'cors'
};

/**
 * Este es el método principal que establece las cabeceras y los datos que
 * deben viajar con la petición, verifica si existe una sesión activa e incluye
 * o elimina la cabecera “Authorization” junto con el JWT. De igual manera establece
 * las validaciones de las respuestas del servidor y devuelve una respuesta en el
 * mismo formato para todas las peticiones o los mensajes de error correspondientes.
 *
 * @param endpoint
 * @param method
 * @param params
 * @returns {Promise<{data: *, status: number}|*|{data, status: number}>}
 */
const handleRequest = async (endpoint, method, params = null) => {
    if (!API.headers['Authorization']) {
        API.headers['Authorization'] = `${Cookies.get('token')}`;

        if (API.headers['Authorization'] === 'undefined') {
            API.headers['Authorization'] = '';
        }
    }
    const requestData = { method };

    if (params !== null) {
        if (params instanceof FormData) {
            requestData['body'] = params;
            delete headers['Content-Type'];
        } else {
            requestData['body'] = JSON.stringify(params);
            headers['Content-Type'] = 'application/json';
            headers['Access-Control-Allow-Origin'] = '*';
        }
    }

    requestData['headers'] = headers;
    // console.log('requestData', requestData);
    const response = await fetch(`${baseURL}${endpoint}`, requestData);

    let jsonResponse = {};
    if (response.status === 408) {
        jsonResponse = await response.json();
        const customEvent = new CustomEvent('status408', {
            detail: { customProp: jsonResponse }
        });
        window.dispatchEvent(customEvent);
    }

    jsonResponse = await response.json();

    if (!response.ok) {
        return Promise.reject({
            message: jsonResponse.log,
            error: jsonResponse.error || jsonResponse.errors,
            status: response.status
        });
    }

    return {
        status: response.status,
        data: jsonResponse.data || jsonResponse
    };
};

const post = (endpoint, params = null) => {
    return handleRequest(endpoint, 'POST', params);
};

const put = (endpoint, params = null) => {
    return handleRequest(endpoint, 'PUT', params);
};

const patch = (endpoint, params = null) => {
    return handleRequest(endpoint, 'PATCH', params);
};

const get = (endpoint) => {
    return handleRequest(endpoint, 'GET');
};

const deleteMethod = (endpoint, params = null) => {
    return handleRequest(endpoint, 'DELETE', params);
};

const fetcher = async (...args) => {
    return await get(...args);
};

const create = (config) => {
    return {
        post,
        put,
        patch,
        get,
        delete: deleteMethod,
        fetcher,
        ...config
    };
};

const API = create({
    baseURL,
    headers
});

export default API;
