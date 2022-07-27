import axios from 'axios';

const key = process.env;
export { key };

const customInterceptors = axios.create({
  baseURL: `https://api.rawg.io/api/games`,
});

export default customInterceptors;
