import axios from "axios";

const BASE_API_URL = 'http://cm-api.test:8888/api';

const api = {
    getAllCoins: () => {
        return axios.get(`${BASE_API_URL}/coins`);
    },
    getOneCoin: (id) => {
        return axios.get(`${BASE_API_URL}/coins/${id}`);
    },
    addCoin: (coin) => {
        return axios.post(`${BASE_API_URL}/coins`, coin);
    },
    updateCoin: (coin) => {
        return axios.patch(`${BASE_API_URL}/coins/${coin.id}`, coin);
    },
    deleteCoin: (id) => {
        return axios.delete(`${BASE_API_URL}/coins/${id}`);
    },
};

export default api;
