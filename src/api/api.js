import axios from 'axios';

//custom api instance
const api=axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {'Authorization':'Bearer <TOKEN>',
    'Content-Type':'application/json'
  }
});
//common to all and also picks up req details as token
api.interceptors.request.use(request=>{
  console.log('Starting Request');
  return request;},
(config)=> {
  const token=localStorage.getItem('token');
  if(token) {
    config.headers.Authorization='Bearer'+token
  }
  return config;
},
(error)=> {
  console.error('Request Error ', error);
  return Promise.reject(error);
});
api.interceptors.request.use(response=>{
  console.log('Response', response);
  return response;
}
//,error
)

export default api;