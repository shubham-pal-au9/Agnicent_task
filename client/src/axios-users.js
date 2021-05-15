import axios from 'axios';
//baseURL:'https://trello-clone-shubh.herokuapp.com/api'
const instance = axios.create({
   baseURL:'http://localhost:3002/api'
});

export default instance;