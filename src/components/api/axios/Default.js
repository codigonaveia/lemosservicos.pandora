import axios from 'axios'


const api = axios.create({
    baseURL:"https://localhost:7187/api/v1/"
   
});

export default api;