import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const routes = {
    signIn: BASE_URL + '/sign-in',
    signUp: BASE_URL + '/sign-up'
}

export function signIn(body) {
    return axios.post(routes.signIn, body);    
}

export function signUp(body) {
    return axios.post(routes.signUp, body);    
}