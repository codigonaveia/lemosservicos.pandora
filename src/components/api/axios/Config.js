import axios from 'axios'


const api = axios.create({
    baseURL:"https://localhost:7187/api/v1/",
    headers: {
      'Content-Type': 'multipart/form-data'
      }
});

export default api;