import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const routes = {
    signIn: BASE_URL + '/sign-in'
}

export function signIn(body) {
    return axios.post(routes.signIn, body);    
}