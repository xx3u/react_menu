import axios from 'axios';

const db = axios.create({
  baseURL: 'https://ajs7-7fd5e-default-rtdb.firebaseio.com/dishes'
});

export default db;